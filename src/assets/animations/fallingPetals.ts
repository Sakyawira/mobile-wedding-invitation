// Wind scaling constants
const WIND_X_SCALE = 0.3;
const WIND_Y_SCALE = 0.1;
const PETAL_WIND_X_EFFECT = 0.1;
const PETAL_WIND_X_RANDOM = 0.5;
const PETAL_WIND_Y_EFFECT = 0.2;
const PETAL_WIND_Y_RANDOM = 0.5;
const PETAL_WIND_BLEND = 0.5;
const PETAL_WIND_ROTATION = 0.02;
const WIND_RADIUS = 200; // Only petals within this radius from mouse get wind

// Performance constants
const MAX_PETALS = 50; // Maximum number of petals to prevent performance issues
const FRAME_SKIP = 0; // Skip frames for lower-end devices (0 = no skipping)
const CLEANUP_INTERVAL = 5000; // Cleanup interval in milliseconds

// Device performance detection
function getDevicePerformanceLevel(): 'low' | 'medium' | 'high' {
  // Check for device memory (if available)
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
  
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 1;
  
  // Memory-based detection
  if (memory) {
    if (memory >= 8) return 'high';
    if (memory >= 4) return 'medium';
    return 'low';
  }
  
  // CPU-based detection
  if (cores >= 8) return 'high';
  if (cores >= 4) return 'medium';
  return 'low';
}

// Get optimal petal count based on device performance
function getOptimalPetalCount(requestedDensity: number): number {
  const performanceLevel = getDevicePerformanceLevel();
  const maxPetals = Math.min(requestedDensity, MAX_PETALS);
  
  // Also consider screen size - smaller screens need fewer petals
  const screenArea = window.innerWidth * window.innerHeight;
  const baseArea = 400 * 800; // Base area for full petal count
  const screenMultiplier = Math.min(1, screenArea / baseArea);
  
  let devicePetals: number;
  switch (performanceLevel) {
    case 'low':
      devicePetals = Math.min(maxPetals, 25); // Very conservative for low-end devices
      break;
    case 'medium':
      devicePetals = Math.min(maxPetals, 35); // Moderate for mid-range devices
      break;
    case 'high':
      devicePetals = maxPetals; // Use full amount for high-end devices
      break;
    default:
      devicePetals = Math.min(maxPetals, 30); // Safe default
  }
  
  // Apply screen size multiplier
  return Math.max(10, Math.floor(devicePetals * screenMultiplier)); // Minimum 10 petals
}

class Petal {
  x = 0;
  y = 0;
  size = 0;
  speed = 0;
  angle = 0;
  spin = 0;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  color: string;
  windX = 0;
  windY = 0;
  windDecay = 0.96; // how quickly wind effect fades
  lastWindApplied = 0; // timestamp of last wind effect
  isActive = true; // for object pooling
  
  // Pre-allocated objects to reduce garbage collection
  private static tempPoint = { x: 0, y: 0 };

  constructor(canvas: HTMLCanvasElement, sizeRange: [number, number], speedRange: [number, number], color: string) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get canvas rendering context');
    }
    this.ctx = context;
    this.color = color;
    this.reset(sizeRange, speedRange);
  }

  reset(sizeRange: [number, number], speedRange: [number, number]) {
    // Ensure petals spawn within visible area with padding
    const padding = 20; // Padding from edges
    const maxX = Math.max(this.canvas.width - padding, padding);
    const maxY = Math.max(this.canvas.height - padding, padding);
    
    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY - maxY; // Start above screen
    
    // Scale petal size based on screen size with smaller petals overall
    const sizeMultiplier = Math.max(0.25, Math.min(0.7, this.canvas.width / 400)); // Reduced max from 1 to 0.7
    const scaledSizeRange: [number, number] = [
      Math.max(1, sizeRange[0] * sizeMultiplier), // Reduced minimum from 1.5px to 1px
      Math.max(2.5, sizeRange[1] * sizeMultiplier)    // Reduced minimum from 3px to 2.5px
    ];
    
    this.size = Math.random() * (scaledSizeRange[1] - scaledSizeRange[0]) + scaledSizeRange[0];
    this.speed = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
    this.angle = Math.random() * Math.PI * 2;
    this.spin = Math.random() * 0.02 - 0.01;
    this.windX = 0;
    this.windY = 0;
    this.isActive = true;
  }

  applyWind(wind: {x: number, y: number}, mouse: {x: number, y: number} | null) {
    if (!mouse || !this.isActive) return;
    
    // Use pre-allocated object to reduce garbage collection
    const tempPoint = Petal.tempPoint;
    tempPoint.x = this.x - mouse.x;
    tempPoint.y = this.y - mouse.y;
    
    const distSq = tempPoint.x * tempPoint.x + tempPoint.y * tempPoint.y;
    const radiusSq = WIND_RADIUS * WIND_RADIUS;
    
    if (distSq < radiusSq) {
      // Wind effect falls off with distance (linear falloff)
      const dist = Math.sqrt(distSq);
      const strength = 1 - dist / WIND_RADIUS;
      const windEffectX = wind.x * (PETAL_WIND_X_EFFECT + Math.random() * PETAL_WIND_X_RANDOM) * strength;
      const windEffectY = wind.y * (PETAL_WIND_Y_EFFECT + Math.random() * PETAL_WIND_Y_RANDOM) * strength;
      this.windX = this.windX * this.windDecay + windEffectX * PETAL_WIND_BLEND;
      this.windY = this.windY * this.windDecay + windEffectY * PETAL_WIND_BLEND;
      this.lastWindApplied = Date.now();
    }
  }

  update() {
    if (!this.isActive) return;
    
    this.x += this.windX;
    this.y += this.speed + this.windY;
    this.angle += this.spin + this.windX * PETAL_WIND_ROTATION;
    
    // More generous reset conditions for smaller screens
    const resetMargin = 50; // Allow petals to go slightly off-screen before reset
    const leftBound = -resetMargin;
    const rightBound = this.canvas.width + resetMargin;
    const bottomBound = this.canvas.height + resetMargin;
    
    if (this.y > bottomBound || this.x < leftBound || this.x > rightBound) {
      this.reset([1, 5], [0.5, 2]);
    }
    
    // Wind decays naturally
    this.windX *= this.windDecay;
    this.windY *= this.windDecay;
  }

  draw() {
    if (!this.isActive) return;
    
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    
    // Cache mobile detection for performance
    const isMobile = this.canvas.width < 500;
    
    // Optimize color setting - avoid regex replacement on every frame
    if (isMobile) {
      this.ctx.fillStyle = this.color.includes('0.7)') || this.color.includes('0.8)') 
        ? this.color.replace(/0\.[78]\)/, '0.9)')
        : this.color;
    } else {
      this.ctx.fillStyle = this.color;
    }
    
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Add stroke only on mobile and only for very small petals
    if (isMobile && this.size < 4) {
      this.ctx.strokeStyle = 'rgba(255, 182, 193, 0.3)';
      this.ctx.lineWidth = 0.5;
      this.ctx.stroke();
    }
    
    this.ctx.restore();
  }
  
  deactivate() {
    this.isActive = false;
  }
}

export function startFallingPetals({
  density = 100,
  sizeRange = [1, 5] as [number, number],
  speedRange = [0.5, 2] as [number, number],
  color = 'rgba(255, 182, 193, 0.8)',
} = {}) {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1'; // Bring petals in front but behind interactive elements
  canvas.style.overflow = 'hidden'; // Prevent scrollbars
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas rendering context');
  }

  // Limit density to MAX_PETALS for performance and adjust based on device capabilities
  const actualDensity = getOptimalPetalCount(density);
  const petals = Array.from({ length: actualDensity }, () => new Petal(canvas, sizeRange, speedRange, color));

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reset petals positions after resize to ensure they're visible
    petals.forEach(petal => {
      // Force petals to respawn in visible area
      petal.reset(sizeRange, speedRange);
      // Stagger the initial positions so they don't all appear at once
      petal.y = Math.random() * canvas.height - canvas.height * 0.5;
    });
  }

  const wind = { x: 0, y: 0 };
  const windDecay = 0.95;
  let isMouseDown = false;
  let lastMouse = { x: 0, y: 0 };
  let lastWindMouse: { x: number, y: number } | null = null;
  let lastWind: { x: number, y: number } = { x: 0, y: 0 };
  let animationId: number;
  let frameCount = 0;
  let lastCleanup = Date.now();

  // Throttle mouse events for better performance
  let mouseMoveThrottled = false;
  const throttleDelay = 16; // ~60fps

  function onPointerDown(e: MouseEvent | TouchEvent) {
    isMouseDown = true;
    const point = 'touches' in e ? e.touches[0] : e;
    lastMouse = { x: point.clientX, y: point.clientY };
  }

  function onPointerMove(e: MouseEvent | TouchEvent) {
    if (!isMouseDown || mouseMoveThrottled) return;
    
    mouseMoveThrottled = true;
    setTimeout(() => { mouseMoveThrottled = false; }, throttleDelay);
    
    const point = 'touches' in e ? e.touches[0] : e;
    const dx = point.clientX - lastMouse.x;
    const dy = point.clientY - lastMouse.y;
    wind.x = dx * WIND_X_SCALE;
    wind.y = dy * WIND_Y_SCALE;
    lastMouse = { x: point.clientX, y: point.clientY };
  }

  function onPointerUp(e: MouseEvent | TouchEvent) {
    isMouseDown = false;
    const point = 'touches' in e && e.changedTouches ? e.changedTouches[0] : (e as MouseEvent);
    lastWindMouse = { x: point.clientX, y: point.clientY };
    lastWind = { ...wind };
  }

  // Event listeners
  window.addEventListener('mousedown', onPointerDown, { passive: true });
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('mouseup', onPointerUp, { passive: true });
  window.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp, { passive: true });

  function animate() {
    frameCount++;
    
    // Frame skipping for performance (if needed)
    if (FRAME_SKIP > 0 && frameCount % (FRAME_SKIP + 1) !== 0) {
      animationId = requestAnimationFrame(animate);
      return;
    }

    // Periodic cleanup
    const now = Date.now();
    if (now - lastCleanup > CLEANUP_INTERVAL) {
      // Force garbage collection hints (if available)
      if (typeof window !== 'undefined' && 'gc' in window) {
        try {
          (window as unknown as { gc: () => void }).gc();
        } catch (e) {
          // Ignore if gc is not available
        }
      }
      lastCleanup = now;
    }

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Batch petal updates and draws
    for (const petal of petals) {
      // Only apply wind to petals near the last mouse up point
      if (lastWindMouse && (Math.abs(lastWind.x) > 0.01 || Math.abs(lastWind.y) > 0.01)) {
        petal.applyWind(lastWind, lastWindMouse);
      }
      
      petal.update();
      petal.draw();
    }
    
    // Decay wind after user stops dragging
    if (!isMouseDown) {
      wind.x *= windDecay;
      wind.y *= windDecay;
      if (Math.abs(wind.x) < 0.01) wind.x = 0;
      if (Math.abs(wind.y) < 0.01) wind.y = 0;
      
      // Decay lastWind as well
      lastWind.x *= windDecay;
      lastWind.y *= windDecay;
      if (Math.abs(lastWind.x) < 0.01) lastWind.x = 0;
      if (Math.abs(lastWind.y) < 0.01) lastWind.y = 0;
      
      // Clear lastWindMouse if wind is gone
      if (lastWind.x === 0 && lastWind.y === 0) lastWindMouse = null;
    }
    
    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();

  // Return cleanup function
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousedown', onPointerDown);
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('mouseup', onPointerUp);
    window.removeEventListener('touchstart', onPointerDown);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('touchend', onPointerUp);
    window.removeEventListener('resize', resizeCanvas);
    
    // Deactivate all petals
    petals.forEach(petal => petal.deactivate());
    
    // Remove canvas
    if (canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  };
}
