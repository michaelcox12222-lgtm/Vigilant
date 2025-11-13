import { Card, CardContent } from "../../../components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Critical information didn't reach the right people fast enough. Vigilant fixed the relay—our field teams now get threat intel in the first minutes of an incident.",
    author: "James L.",
    role: "Security Director, Fortune 500",
  },
  {
    quote:
      "We went from fragmented channels to a single secure platform. The encrypted comms and rally points have been invaluable during our overseas deployments.",
    author: "Sarah M.",
    role: "Crisis Response Lead",
  },
  {
    quote:
      "The role-based training and admin dashboards give us the oversight we need without compromising employee privacy. Vigilant scales with our organization.",
    author: "Maria R.",
    role: "Chief Safety Officer",
  },
];

const stats = [
  { value: "83%", label: "Violent-crime risk in a lifetime" },
  { value: "93M", label: "Affected by natural disasters in 2023" },
  { value: "71%", label: "Women travelers feel less safe" },
  { value: "700+", label: "Missing in Mexico (2023)" },
];

export function ProofSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Used by safety professionals. Loved by everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From first responders to families, see how Vigilant helps people
            stay prepared and protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card
                className="border backdrop-blur-[60px] shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:border-brand-primary/40 transition-all hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  borderColor: "rgba(30, 58, 95, 0.3)",
                }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-brand-primary/50 mb-4" />
                  <p className="text-gray-200 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="backdrop-blur-[60px] rounded-2xl shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] border p-8 md:p-12 hover:border-brand-primary/40 transition-all hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
            borderColor: "rgba(30, 58, 95, 0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              >
                <div className="text-4xl md:text-5xl text-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
