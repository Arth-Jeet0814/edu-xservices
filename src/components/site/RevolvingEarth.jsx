import React from "react";
import earthTexture from "@/assets/earth-texture.jpg";

export function RevolvingEarth({ size = 440, className = "" }) {
  return (
    <div
      className={`relative mx-auto flex items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, maxWidth: "100%", aspectRatio: "1 / 1" }}
    >
      {/* Deep Space Background Ambient Glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 72%)",
          transform: "scale(1.35)",
          filter: "blur(20px)",
        }}
      />

      {/* Atmospheric Rayleigh Halo Ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: "0 0 50px 8px rgba(14, 165, 233, 0.35), 0 0 100px 25px rgba(3, 105, 161, 0.2)",
          transform: "scale(1.02)",
        }}
      />

      {/* Orbital Ring 1 - Cyan International Academic Pathway */}
      <div
        className="absolute inset-0 rounded-full border border-cyan-400/30 pointer-events-none"
        style={{
          transform: "rotateX(72deg) rotateY(16deg) scale(1.38)",
          borderStyle: "dashed",
          animation: "spinSlow 45s linear infinite",
        }}
      >
        {/* Orbiting Satellite Node */}
        <div
          className="absolute -top-1.5 left-1/2 size-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]"
          style={{ transform: "translateX(-50%)" }}
        />
      </div>

      {/* Orbital Ring 2 - Burgundy Institutional Network */}
      <div
        className="absolute inset-0 rounded-full border border-[#B21941]/40 pointer-events-none"
        style={{
          transform: "rotateX(64deg) rotateY(-32deg) scale(1.52)",
          borderStyle: "dotted",
          animation: "spinReverse 60s linear infinite",
        }}
      >
        {/* Orbiting Partner Beacon */}
        <div className="absolute -bottom-1.5 left-1/3 size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
      </div>

      {/* The 3D Spherical Earth Body */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
        style={{
          backgroundColor: "#030c1e",
          boxShadow:
            "inset -35px -25px 70px 10px rgba(0, 0, 0, 0.98), inset 18px 18px 36px rgba(56, 189, 248, 0.45), 0 25px 60px -10px rgba(0, 0, 0, 0.95)",
        }}
      >
        {/* Seamless 360-degree Continuous Revolving Surface */}
        <div
          className="absolute top-0 left-0 h-full flex pointer-events-none"
          style={{
            width: "200%",
            animation: "revolveEarthGPU 32s linear infinite",
            willChange: "transform",
          }}
        >
          <img
            src={earthTexture}
            alt="Earth Surface Map"
            className="w-1/2 h-full object-cover shrink-0 select-none pointer-events-none"
            draggable={false}
          />
          <img
            src={earthTexture}
            alt="Earth Surface Map"
            className="w-1/2 h-full object-cover shrink-0 select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* 3D Sunlit Specular Highlight (Upper Left Illumination) */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(circle at 28% 26%, rgba(255, 255, 255, 0.28) 0%, rgba(186, 230, 253, 0.12) 22%, transparent 50%)",
          }}
        />

        {/* Day-to-Night Terminator & Planetary Shadow (Right & Bottom) */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, transparent 25%, rgba(1, 5, 17, 0.45) 55%, rgba(1, 4, 12, 0.88) 75%, rgba(0, 0, 2, 0.98) 96%)",
          }}
        />

        {/* Rayleigh Scattering Atmospheric Rim Light */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            boxShadow:
              "inset 10px 10px 22px rgba(186, 230, 253, 0.55), inset -25px -25px 50px rgba(0, 0, 0, 0.96)",
          }}
        />

        {/* Institutional Hub Pulsing Radar Beacon (Africa Regional Directorate) */}
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: "46%",
            left: "48%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex size-6 rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-3 bg-emerald-400 ring-2 ring-white shadow-[0_0_12px_#34d399]" />
          </div>
        </div>
      </div>

      {/* Pure CSS 60FPS Hardware-Accelerated Animations */}
      <style>{`
        @keyframes revolveEarthGPU {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotateX(72deg) rotateY(16deg) scale(1.38) rotate(0deg);
          }
          to {
            transform: rotateX(72deg) rotateY(16deg) scale(1.38) rotate(360deg);
          }
        }
        @keyframes spinReverse {
          from {
            transform: rotateX(64deg) rotateY(-32deg) scale(1.52) rotate(0deg);
          }
          to {
            transform: rotateX(64deg) rotateY(-32deg) scale(1.52) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
