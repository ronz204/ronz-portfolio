interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function useParticles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  let animationId = 0;
  const particles: Particle[] = [];
  const mouse = { x: -1000, y: -1000 };

  function init(width: number, height: number) {
    particles.length = 0
    const count = Math.min(Math.floor((width * height) / 12000), 80)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.40,
      });
    };
  };

  function resize() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init(window.innerWidth, window.innerHeight);
  };

  function onMouseMove(e: MouseEvent) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  function drawParticle(p: Particle) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.fill();
  };

  function drawConnection(p1: Particle, p2: Particle, dist: number) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);

    ctx.strokeStyle = `rgba(255, 255, 255, ${0.50 * (1 - dist / 120)})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  };

  function updateParticle(p: Particle, w: number, h: number) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 150 && dist > 0) {
      const force = (150 - dist) / 150;
      p.vx += (dx / dist) * force * 0.02;
      p.vy += (dy / dist) * force * 0.02;
    };

    p.vx *= 0.999;
    p.vy *= 0.999;
  };

  function animate() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!;

      updateParticle(p, w, h);
      drawParticle(p);

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]!;
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;

        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) drawConnection(p, p2, dist);
      };
    };

    animationId = requestAnimationFrame(animate);
  };

  function start() {
    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animate();
  };

  function stop() {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
  };

  return { start, stop };
};
