import { useEffect, useState } from "react";
import vigilantIcon from "../../assets/logo.png";

export function AnimatedChip() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Top Lines with Animated Data Packets - Three lines flowing down */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1.5px] h-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/40 to-brand-primary/80" />
        <div
          className="absolute w-1 h-2 bg-brand-primary left-1/2 -translate-x-1/2 blur-[1px]"
          style={{
            animation: "dot-top 2.5s ease-in-out infinite",
            boxShadow:
              "0 0 8px rgba(26,157,143,1), 0 0 12px rgba(26,157,143,0.8)",
          }}
        />
      </div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 -translate-x-4 w-[1px] h-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-0.5 h-1.5 bg-brand-primary left-1/2 -translate-x-1/2 blur-[1px]"
          style={{
            animation: "dot-top 2.8s ease-in-out infinite 0.3s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 translate-x-4 w-[1px] h-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-0.5 h-1.5 bg-brand-primary left-1/2 -translate-x-1/2 blur-[1px]"
          style={{
            animation: "dot-top 3.2s ease-in-out infinite 0.6s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>

      {/* Left Lines with Animated Data Packets */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 h-[1.5px] w-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/40 to-brand-primary/80" />
        <div
          className="absolute w-2 h-1 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-left 2.5s ease-in-out infinite",
            boxShadow:
              "0 0 8px rgba(26,157,143,1), 0 0 12px rgba(26,157,143,0.8)",
          }}
        />
      </div>
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 -translate-y-4 h-[1px] w-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-1.5 h-0.5 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-left 2.8s ease-in-out infinite 0.3s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 translate-y-4 h-[1px] w-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-1.5 h-0.5 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-left 3.2s ease-in-out infinite 0.6s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>

      {/* Right Lines with Animated Data Packets */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 h-[1.5px] w-20">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-primary/40 to-brand-primary/80" />
        <div
          className="absolute w-2 h-1 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-right 2.5s ease-in-out infinite",
            boxShadow:
              "0 0 8px rgba(26,157,143,1), 0 0 12px rgba(26,157,143,0.8)",
          }}
        />
      </div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 -translate-y-4 h-[1px] w-20">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-1.5 h-0.5 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-right 2.8s ease-in-out infinite 0.3s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 translate-y-4 h-[1px] w-20">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-primary/30 to-brand-primary/60" />
        <div
          className="absolute w-1.5 h-0.5 bg-brand-primary top-1/2 -translate-y-1/2 blur-[1px]"
          style={{
            animation: "dot-right 3.2s ease-in-out infinite 0.6s",
            boxShadow:
              "0 0 6px rgba(26,157,143,0.9), 0 0 10px rgba(26,157,143,0.6)",
          }}
        />
      </div>

      {/* Green Glow Behind Icon */}
      <div
        className="absolute inset-0 w-14 h-14 rounded-full blur-xl transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle, rgba(26,157,143,0.4) 0%, rgba(26,157,143,0.2) 50%, transparent 100%)",
          transform: isVisible ? "scale(1.2)" : "scale(0.8)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Circular Icon with Glow */}
      <div className="relative w-14 h-14 rounded-full overflow-hidden">
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-700"
          style={{
            boxShadow: isVisible
              ? "0 0 30px rgba(26,157,143,0.5), 0 0 15px rgba(26,157,143,0.3), inset 0 0 20px rgba(26,157,143,0.2)"
              : "0 0 10px rgba(26,157,143,0.2)",
          }}
        />

        {/* Icon Image */}
        <img
          src={vigilantIcon}
          alt="Vigilant"
          className="w-full h-full object-cover relative z-10"
          style={{
            filter: "brightness(1.1) contrast(1.1)",
          }}
        />
      </div>

      <style>{`
        @keyframes dot-top {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        @keyframes dot-left {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        
        @keyframes dot-right {
          0% {
            right: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            right: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
