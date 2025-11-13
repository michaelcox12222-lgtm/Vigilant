import { Radio, Shield, GraduationCap, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Radio,
    title: "Easy to use",
    description: "No setup headaches.",
  },
  {
    icon: Shield,
    title: "Faster alerts",
    description: "See potential danger sooner.",
  },
  {
    icon: GraduationCap,
    title: "Truly private",
    description:
      "Your data stays secure and is only shared with people you choose.",
  },
  {
    icon: LayoutDashboard,
    title: "Built by experts",
    description: "Created by professionals who keep safety simple.",
  },
];

export function BenefitsSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Why people love Vigilant
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl border backdrop-blur-[60px] hover:border-brand-primary/40 transition-all shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
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
              <div className="w-16 h-16 rounded-xl bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center mb-4 shadow-xl shadow-brand-primary/40">
                <benefit.icon className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
