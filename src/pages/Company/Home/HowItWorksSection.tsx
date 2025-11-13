import { Radio, Bell, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Know",
    description:
      "Get instant alerts about what's nearby.",
  },
  {
    number: "02",
    icon: Bell,
    title: "Share",
    description:
      "Let trusted contacts see where you are.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Chat",
    description:
      "Ask the AI for advice or message people you trust.",
  },
  {
    number: "04",
    icon: Users,
    title: "Stay safe",
    description:
      "Follow simple steps for any situation.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center relative p-6 rounded-2xl border backdrop-blur-[60px] hover:border-brand-primary/40 transition-all shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                borderColor: "rgba(30, 58, 95, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Connector Line - Hidden on mobile, visible on lg */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#1a9d8f]/50 to-[#1a9d8f]/0" />
              )}

              <div className="relative z-10 w-24 h-24 rounded-full bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center mb-4 shadow-xl shadow-brand-primary/40">
                <step.icon className="h-10 w-10 text-brand-primary" />
              </div>

              <div className="text-sm text-brand-primary mb-2">
                {step.number}
              </div>
              <h3 className="text-2xl text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
