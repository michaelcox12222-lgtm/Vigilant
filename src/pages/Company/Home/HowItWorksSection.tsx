import { Radio, Bell, GraduationCap, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Intel",
    description:
      "Close the awareness gap with immediate, location-relevant threat intel from 10,000+ sources.",
  },
  {
    number: "02",
    icon: Bell,
    title: "Alert",
    description:
      "Reach the right teams and individuals in the critical first minutes of an incident.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Guide",
    description:
      "Deliver behavior-aware training and clear next steps when response matters most.",
  },
  {
    number: "04",
    icon: Users,
    title: "Connect",
    description:
      "Coordinate teams with encrypted communications, SOS, rally points, and live tracking.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Know Sooner, Act Faster
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Replace slow, command-center-dependent models with instant, behavior-aware intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative p-6 rounded-2xl border backdrop-blur-[60px] hover:border-brand-primary/40 transition-all shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                borderColor: "rgba(30, 58, 95, 0.3)",
              }}
            >
              {/* Connector Line - Hidden on mobile, visible on lg */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#1a9d8f]/50 to-[#1a9d8f]/0" />
              )}

              <div className="relative z-10 w-24 h-24 rounded-full bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center mb-4 shadow-xl shadow-brand-primary/40">
                <step.icon className="h-10 w-10 text-brand-primary" />
              </div>

              <div className="text-sm text-brand-primary mb-2">{step.number}</div>
              <h3 className="text-2xl text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
