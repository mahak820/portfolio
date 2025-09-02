import React, { useRef, useEffect } from 'react';

// Utility function to combine classes (you can replace this with your own className utility)
const cn = (...classes) => classes.filter(Boolean).join(' ');

const SleekLineCursor = ({
  friction = 0.5,
  trails = 20,
  size = 50,
  dampening = 0.25,
  tension = 0.98,
  className = ''
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Interface implementations
    class Wave {
      constructor(options = {}) {
        this.phase = options.phase || 0;
        this.offset = options.offset || 0;
        this.frequency = options.frequency || 0.001;
        this.amplitude = options.amplitude || 1;
        this.e = 0;
      }

      update() {
        this.phase += this.frequency;
        this.e = this.offset + Math.sin(this.phase) * this.amplitude;
        return this.e;
      }

      value() {
        return this.e;
      }
    }

    class Node {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
      }
    }

    class Line {
      constructor(options) {
        this.spring = options.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];

        for (let n = 0; n < E.size; n++) {
          const node = new Node();
          node.x = pos.x;
          node.y = pos.y;
          this.nodes.push(node);
        }
      }

      update() {
        let spring = this.spring;
        let currentNode = this.nodes[0];

        currentNode.vx += (pos.x - currentNode.x) * spring;
        currentNode.vy += (pos.y - currentNode.y) * spring;

        for (let i = 0, length = this.nodes.length; i < length; i++) {
          currentNode = this.nodes[i];

          if (i > 0) {
            const prevNode = this.nodes[i - 1];
            currentNode.vx += (prevNode.x - currentNode.x) * spring;
            currentNode.vy += (prevNode.y - currentNode.y) * spring;
            currentNode.vx += prevNode.vx * E.dampening;
            currentNode.vy += prevNode.vy * E.dampening;
          }

          currentNode.vx *= this.friction;
          currentNode.vy *= this.friction;
          currentNode.x += currentNode.vx;
          currentNode.y += currentNode.vy;
          spring *= E.tension;
        }
      }

      draw(ctx) {
        let currentNode, nextNode;
        let x = this.nodes[0].x;
        let y = this.nodes[0].y;

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (let i = 1, length = this.nodes.length - 2; i < length; i++) {
          currentNode = this.nodes[i];
          nextNode = this.nodes[i + 1];
          x = 0.5 * (currentNode.x + nextNode.x);
          y = 0.5 * (currentNode.y + nextNode.y);
          ctx.quadraticCurveTo(currentNode.x, currentNode.y, x, y);
        }

        currentNode = this.nodes[this.nodes.length - 2];
        nextNode = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(currentNode.x, currentNode.y, nextNode.x, nextNode.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    // Initialize variables
    let ctx = canvas.getContext('2d');
    let f;
    let pos = { x: 0, y: 0 };
    let lines = [];
    let isRunning = true;
    let animationFrame;

    const E = {
      friction,
      trails,
      size,
      dampening,
      tension,
    };

    // Functions
    const createLines = () => {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }
    };

    const updatePosition = (e) => {
      if ('touches' in e) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      } else {
        pos.x = e.clientX;
        pos.y = e.clientY;
      }
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        pos.x = e.touches[0].pageX;
        pos.y = e.touches[0].pageY;
      }
    };

    const render = () => {
      if (isRunning) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
        ctx.lineWidth = 1;

        for (let i = 0; i < E.trails; i++) {
          const line = lines[i];
          line.update();
          line.draw(ctx);
        }

        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const resizeCanvas = () => {
      if (ctx && ctx.canvas) {
        ctx.canvas.width = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight;
      }
    };

    const onMouseMove = (e) => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchstart', onMouseMove);
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('touchmove', updatePosition);
      document.addEventListener('touchstart', handleTouchMove);
      updatePosition(e);
      createLines();
      render();
    };

    const handleFocus = () => {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    };

    const handleBlur = () => {
      isRunning = true;
    };

    // Initialize
    const initCanvas = () => {
      ctx.running = true;

      f = new Wave({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchstart', onMouseMove);
      document.body.addEventListener('orientationchange', resizeCanvas);
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('focus', handleFocus);
      window.addEventListener('blur', handleBlur);

      resizeCanvas();
    };

    // Start everything
    initCanvas();

    // Cleanup function
    return () => {
      isRunning = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('touchstart', onMouseMove);
      document.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('touchmove', updatePosition);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [friction, trails, size, dampening, tension]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none fixed inset-0 z-50', className)}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default SleekLineCursor;