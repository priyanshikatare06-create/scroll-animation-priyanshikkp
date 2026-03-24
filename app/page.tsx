"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const carRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // control range (0 → 1)
      const progress = Math.min(scrollY / 600, 1);

      // 🚗 CAR MOVEMENT (LEFT → RIGHT FULL WIDTH)
      if (carRef.current) {
        gsap.to(carRef.current, {
         x: progress * window.innerWidth * 1.2,
          duration: 0.3,
        });
      }

      // 📦 CARDS APPEAR GRADUALLY
      gsap.to(".box", {
        opacity: progress,
        y: (1 - progress) * 80,
        duration: 0.3,
        stagger: 0.15,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[200vh] bg-black text-white">

      {/* 🔒 FIXED SCREEN (NO PAGE MOVEMENT FEEL) */}
      <section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* ✅ ALWAYS VISIBLE */}
        <h1 className="text-[100px] md:text-[160px] tracking-[25px] font-extrabold mb-16 text-center">
          WELCOME
        </h1>

        {/* 📦 BIG CARDS */}
        <div className="flex gap-10 flex-wrap justify-center">
          
          <div className="box opacity-0 bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[300px] text-center border border-white/20">
            <h2 className="text-5xl font-bold text-green-400">95%</h2>
            <p className="text-lg mt-2">Success Rate</p>
          </div>

          <div className="box opacity-0 bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[300px] text-center border border-white/20">
            <h2 className="text-5xl font-bold text-blue-400">200+</h2>
            <p className="text-lg mt-2">Projects</p>
          </div>

          <div className="box opacity-0 bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[300px] text-center border border-white/20">
            <h2 className="text-5xl font-bold text-pink-400">50K</h2>
            <p className="text-lg mt-2">Users</p>
          </div>

        </div>

        {/* 🚗 CAR */}
        <img
          ref={carRef}
          src="/car.png"
          alt="car"
          className="absolute bottom-10 left-0 w-[350px]"
        />

      </section>
    </div>
  );
}