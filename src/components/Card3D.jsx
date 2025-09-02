import React, { useRef } from "react";
import "./Card3D.css";

const Card3D = ({ children, className = "", containerClass = "" }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // 🔥 stronger rotation (smaller divisor = bigger tilt)
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      className={`flex items-center justify-center p-2 ${containerClass}`}
      style={{ perspective: "600px" }}  // 🔥 stronger depth
    >
      <div
        ref={containerRef}
        className={`relative flex flex-col items-center justify-center bg-white border rounded-xl shadow-2xl transition-all duration-200 ease-linear ${className}`}
        style={{ transformStyle: "preserve-3d", width: "340px", height: "440px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default Card3D;
