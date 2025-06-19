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
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height - this.canvas.height;
    this.size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    this.speed = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
    this.angle = Math.random() * Math.PI * 2;
    this.spin = Math.random() * 0.02 - 0.01;
  }

  applyWind(wind: {x: number, y: number}, mouse: {x: number, y: number} | null) {
    if (!mouse) return;
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < WIND_RADIUS) {
      // Wind effect falls off with distance (linear falloff)
      const strength = 1 - dist / WIND_RADIUS;
      const windEffectX = wind.x * (PETAL_WIND_X_EFFECT + Math.random() * PETAL_WIND_X_RANDOM) * strength;
      const windEffectY = wind.y * (PETAL_WIND_Y_EFFECT + Math.random() * PETAL_WIND_Y_RANDOM) * strength;
      this.windX = this.windX * this.windDecay + windEffectX * PETAL_WIND_BLEND;
      this.windY = this.windY * this.windDecay + windEffectY * PETAL_WIND_BLEND;
      this.lastWindApplied = Date.now();
    }
  }

  update() {
    this.x += this.windX;
    this.y += this.speed + this.windY;
    this.angle += this.spin + this.windX * PETAL_WIND_ROTATION;
    if (this.y > this.canvas.height || this.x < 0 || this.x > this.canvas.width) {
      this.reset([1, 5], [0.5, 2]);
      this.windX = 0;
      this.windY = 0;
    }
    // Wind decays naturally
    this.windX *= this.windDecay;
    this.windY *= this.windDecay;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
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
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const petals = Array.from({ length: density }, () => new Petal(canvas, sizeRange, speedRange, color));

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  const wind = { x: 0, y: 0 };
  const windDecay = 0.95;
  let isMouseDown = false;
  let lastMouse = { x: 0, y: 0 };
  let lastWindMouse: { x: number, y: number } | null = null;
  let lastWind: { x: number, y: number } = { x: 0, y: 0 };

  function onPointerDown(e: MouseEvent | TouchEvent) {
    isMouseDown = true;
    const point = 'touches' in e ? e.touches[0] : e;
    lastMouse = { x: point.clientX, y: point.clientY };
  }
  function onPointerMove(e: MouseEvent | TouchEvent) {
    if (!isMouseDown) return;
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

  // Move all pointer event listeners to window for better drag experience
  window.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchstart', onPointerDown);
  window.addEventListener('touchmove', onPointerMove);
  window.addEventListener('touchend', onPointerUp);

  function animate() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((petal) => {
      // Only apply wind to petals near the last mouse up point
      if (lastWindMouse && (Math.abs(lastWind.x) > 0.01 || Math.abs(lastWind.y) > 0.01)) {
        petal.applyWind(lastWind, lastWindMouse);
      }
      petal.update();
      petal.draw();
    });
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
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
}
