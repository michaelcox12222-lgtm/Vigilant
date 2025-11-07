import { useMemo } from "react";
import { Button } from "../../../components/ui/button";
import {
  Radio,
  Globe,
  MessageSquare,
  Bot,
  GraduationCap,
} from "lucide-react";
import { AnimatedChip } from "../../../components/animations/AnimatedChip";
import heroBackground from "../../../assets/background.png";
import cityscapeImage from "../../../assets/city.png";
import appStoreImage from "../../../assets/app-store.png";
import googlePlayImage from "../../../assets/google-play.png";

const infoCards = [
  {
    icon: Radio,
    label: "Global Threat Alerts",
  },
  {
    icon: Globe,
    label: "Safety Tracking",
  },
  {
    icon: MessageSquare,
    label: "Encrypted Messaging",
  },
  {
    icon: Bot,
    label: "AI Assisted Chatbots",
  },
  {
    icon: GraduationCap,
    label: "Training Academy",
  },
];

export function Hero({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "95%",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />

      {/* Glow behind cityscape */}
      <div
        className="absolute inset-0 z-[0.25]"
        style={{
          backgroundImage: `url(${cityscapeImage})`,
          backgroundSize: "75%",
          backgroundPosition: "center -10%",
          backgroundRepeat: "no-repeat",
          opacity: 0.25,
          filter: "blur(50px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Cityscape Overlay Image with Bottom Fade */}
      <div
        className="absolute inset-0 z-[0.3]"
        style={{
          backgroundImage: `url(${cityscapeImage})`,
          backgroundSize: "75%",
          backgroundPosition: "center -10%",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          filter: "contrast(1.4)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 85%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Flickering Window Lights */}
      <div className="absolute inset-0 z-[0.4]" style={{ filter: 'blur(0.8px)' }}>
        {[...Array(1010)].map((_, i) => {
          const leftPosition = 10 + Math.random() * 80; // Spread from 10% to 90%
          const topPosition = Math.random() * 100; // Spread throughout entire hero section
          const distanceFromCenter = Math.abs(leftPosition - 50) / 40; // 0 at center, 1 at edges
          const centerBias = 1 - distanceFromCenter * 0.6; // Dimmer at edges, brighter at center
          const baseOpacity = (0.2 + Math.random() * 0.5) * centerBias * 0.5; // Reduced opacity
          const floatDuration = 15 + Math.random() * 25; // Random float duration 15-40s
          const floatDelay = Math.random() * 10; // Random delay 0-10s
          return (
            <div
              key={i}
              className="absolute bg-brand-primary"
              style={{
                width: '1.5px',
                height: '2px',
                left: `${leftPosition}%`,
                top: `${topPosition}%`,
                opacity: baseOpacity,
                animation: `flicker${i % 5} ${2 + Math.random() * 3}s infinite, float${i % 6} ${floatDuration}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s, ${floatDelay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Flickering and Floating Animation Styles */}
      <style>{`
        @keyframes flicker0 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes flicker1 {
          0%, 100% { opacity: 0.5; }
          30% { opacity: 1; }
          60% { opacity: 0.4; }
        }
        @keyframes flicker2 {
          0%, 100% { opacity: 0.4; }
          40% { opacity: 0.9; }
          80% { opacity: 0.5; }
        }
        @keyframes flicker3 {
          0%, 100% { opacity: 0.6; }
          25% { opacity: 0.3; }
          75% { opacity: 1; }
        }
        @keyframes flicker4 {
          0%, 100% { opacity: 0.7; }
          20% { opacity: 1; }
          40% { opacity: 0.4; }
          80% { opacity: 0.8; }
        }
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, -12px); }
          66% { transform: translate(-5px, 8px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-10px, 15px); }
          50% { transform: translate(12px, -8px); }
          75% { transform: translate(-6px, -10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, 12px); }
          66% { transform: translate(-8px, -15px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0); }
          40% { transform: translate(6px, -10px); }
          80% { transform: translate(-12px, 14px); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-8px, -12px); }
          60% { transform: translate(14px, 6px); }
        }
      `}</style>

      {/* Edge Fade Overlay - fades to black on all sides */}
      <div
        className="absolute inset-0 z-[0.5]"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,1) 100%),
            radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)
          `,
        }}
      />

      {/* Bottom Fade Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/4 z-[0.5]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-[2]">
        {/* Animated Chip with Vigilant Logo */}
        <div className="inline-flex items-center justify-center mb-8">
          <AnimatedChip />
        </div>

        {/* Main Headline with gradient animation and green highlight */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 leading-[1.15]"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(26,157,143,0.25) 50%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-sweep 10s ease-in-out forwards",
            }}
          >
            The All-in-One Safety Platform for Today's Organizations.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Developed by former FBI, military, and intelligence professionals to bring
          government-grade safety directly to your organization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
                  "_blank"
                )
              }
              className="relative text-base px-8 py-6 w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white border-0 shadow-[0_8px_32px_0_rgba(26,157,143,0.4)] backdrop-blur-xl"
              style={{ fontWeight: 500 }}
            >
              Book a Demo
            </Button>
          </div>
          <div className="relative">
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate?.("beta")}
              className="relative text-base px-8 py-6 w-full sm:w-auto border-white/20 bg-white/[0.03] text-white hover:bg-white/10 hover:text-brand-primary backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              style={{ fontWeight: 500 }}
            >
              Get Started Now
            </Button>
          </div>
        </div>

        <div className="flex items-stretch justify-center gap-4 mt-12 mb-10">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="px-6 py-4 rounded-2xl backdrop-blur-[60px] border w-[200px] shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:border-brand-primary/40 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  borderColor: "rgba(30, 58, 95, 0.3)",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/20 backdrop-blur-xl border border-brand-primary/30 flex items-center justify-center shadow-lg shadow-brand-primary/30">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span
                    className="text-sm text-gray-300"
                    style={{ fontWeight: 500 }}
                  >
                    {card.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* App Store Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 relative z-[2]">
          <img
            src={appStoreImage}
            alt="Download on App Store"
            className="h-14 sm:h-16 md:h-18 w-auto cursor-pointer hover:scale-105 transition-transform brightness-100 opacity-100"
            style={{ filter: "brightness(1) contrast(1)" }}
          />
          <img
            src={googlePlayImage}
            alt="Download on Google Play"
            className="h-14 sm:h-16 md:h-18 w-auto cursor-pointer hover:scale-105 transition-transform brightness-100 opacity-100"
            style={{ filter: "brightness(1) contrast(1)" }}
          />
        </div>
        
      </div>
    </section>
  );
}
