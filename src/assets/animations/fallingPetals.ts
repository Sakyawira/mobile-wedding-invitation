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

  update() {
    this.y += this.speed;
    this.angle += this.spin;
    if (this.y > this.canvas.height) {
      this.reset([1, 5], [0.5, 2]);
    }
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

  function animate() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((petal) => {
      petal.update();
      petal.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
}