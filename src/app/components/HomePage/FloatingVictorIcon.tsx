"use client";
import React, { useState, useEffect } from "react";
import Victor from "@/public/Victor.png";
import Image from "next/image";

const FloatingVictorIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = event;
    const xPosition = clientX - window.innerWidth / 2;
    const yPosition = clientY - window.innerHeight / 2;
    setPosition({
      x: xPosition * 0.04, // Modifier ces valeurs pour ajuster l'amplitude du mouvement
      y: yPosition * 0.04,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div
      className=""
      style={{
        perspective: "500px",
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.3s linear",
      }}>
      <Image src={Victor} alt="Victor" className="4xl:w-3/4 animate-float" />
    </div>
    </>
  );
};

export default FloatingVictorIcon;
