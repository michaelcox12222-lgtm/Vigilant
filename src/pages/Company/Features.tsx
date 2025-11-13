import { Button } from "../../components/ui/button";
import {
  Radio,
  Shield,
  MapPin,
  GraduationCap,
  Bot,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../../components/common/ImageWithFallback";
import intelImage from "../../assets/intel-real-time-alerts.png";
import safetyTrackingImage from "../../assets/safety-tracking.png";
import secureCommsImage from "../../assets/secure-comms.png";
import aiImage from "../../assets/ai-travel-safety-companion.png";
import academyImage from "../../assets/academy.png";
import { motion } from "framer-motion";

const features = [
  {
    icon: Radio,
    title: "Intel (Real-Time Alerts)",
    description:
      "Deliver immediate, location-relevant threat intel from 10,000+ sources to the right teams and individuals—closing the awareness gap in the first minutes of an incident. From natural disasters and civil unrest to crime spikes and travel disruptions, Intel ensures your organization is never caught off guard.",
    image: intelImage,
    reverse: false,
  },
  {
    icon: Shield,
    title: "Secure Comms",
    description:
      "Coordinate with end-to-end encrypted messaging, SOS, and rally points—even when conditions are chaotic. No more fragmented channels during emergencies. Every message, photo, video, and file is protected, ensuring your teams can communicate securely when it matters most.",
    image: secureCommsImage,
    reverse: true,
  },
  {
    icon: MapPin,
    title: "Safety Tracking",
    description:
      "Monitor live locations (opt-in) and nearby threat proximity for traveling staff, campuses, and distributed teams—actionable oversight without compromising privacy. Receive instant alerts if a threat is nearby and get immediate pin drops when an SOS is triggered.",
    image: safetyTrackingImage,
    reverse: false,
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description:
      "On-demand, role-based training: first aid, active-shooter response, travel security, and more. Assign courses, track progress, and reinforce readiness. Academy delivers field-tested training content built by former intelligence officers, federal agents, and special operations veterans.",
    image: academyImage,
    reverse: true,
  },
  {
    icon: Bot,
    title: "AI Travel/Safety Companion",
    description:
      'Ask "Is this area safe?" or request a full briefing. Get real-time guidance grounded in global data and best practices. From everyday safety checks to international travel insights, the AI delivers clear, reliable guidance powered by the expertise of our team and real-time threat intelligence.',
    image: aiImage,
    reverse: false,
  },
];

export function Features() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Sparkles className="w-8 h-8 text-brand-primary" />
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              App Features
            </h1>
            <Sparkles className="w-8 h-8 text-brand-primary" />
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Replace slow, command-center-dependent models with instant,
            behavior-aware intelligence. Vigilant combines Academy training,
            Intel alerts, Secure Comms, Safety Tracking, and an AI travel/safety
            companion in one enterprise-ready platform.
          </motion.p>
        </motion.div>
      </section>

      {/* Features Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  feature.reverse ? "lg:grid-flow-dense" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Image */}
                <motion.div 
                  className={feature.reverse ? "lg:col-start-2" : ""}
                  initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.1, ease: "easeOut" }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/50 to-brand-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={
                    feature.reverse ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                  initial={{ opacity: 0, x: feature.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                >
                  <div className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:bg-white/[0.08] hover:border-brand-primary/40 hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)] transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center flex-shrink-0 shadow-xl shadow-brand-primary/40">
                        <Icon className="w-7 h-7 text-brand-primary" />
                      </div>
                      <h2
                        className="text-3xl sm:text-4xl"
                        style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                      >
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 backdrop-blur-3xl border border-brand-primary/30 rounded-2xl p-12 md:p-16 shadow-[0_8px_32px_0_rgba(26,157,143,0.3)]">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8"
              style={{ fontWeight: 400 }}
            >
              Deploy enterprise-grade safety tools at scale.
            </p>
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-10 py-7 border-0 shadow-[0_8px_32px_0_rgba(26,157,143,0.5)] hover:shadow-[0_12px_48px_0_rgba(26,157,143,0.6)] transition-all"
              style={{ fontWeight: 500 }}
              onClick={() =>
                window.open(
                  "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
                  "_blank"
                )
              }
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
