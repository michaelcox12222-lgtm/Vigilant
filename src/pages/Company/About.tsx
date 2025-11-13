import { Button } from "../../components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

import elliePikula from "../../assets/person/ellie-pikula.jpg";
import nathanKlonoski from "../../assets/person/nathan-klonoski.jpg";
import bettFox from "../../assets/person/bett-fox.jpg";
import chrisFox from "../../assets/person/christopher-fox.jpg";

const founders = [
  {
    name: "Ellie Pikula",
    role: "CEO",
    image: elliePikula,
  },
  {
    name: "Nathan Klonoski",
    role: "CTO",
    image: nathanKlonoski,
  },
  {
    name: "Betty Fox",
    role: "CMO",
    image: bettFox,
  },
];

export function About() {
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
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.15]"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            If awareness is safety,{" "}
            <span className="text-brand-primary">Vigilant</span> is your most
            trusted line of defense.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            We close the gap between risk and response by pairing real-time
            alerts with field-tested training so people act in the critical
            first minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-6 border-0 shadow-[0_8px_32px_0_rgba(26,157,143,0.4)]"
              style={{ fontWeight: 500 }}
              onClick={() =>
                window.open(
                  "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
                  "_blank"
                )
              }
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Vigilant Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-center mb-16"
            style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Vigilant
          </motion.h2>

          {/* Our Background */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 md:p-12 mb-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 backdrop-blur-xl border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3
                  className="text-2xl sm:text-3xl mb-4"
                  style={{ fontWeight: 500 }}
                >
                  Our Story
                </h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                We are former intelligence officers, federal agents, special
                operations veterans, and medical professionals. After years
                writing after-action reports, we saw the same root cause:
                critical information didn't reach the right people fast enough.
              </p>
              <p className="pt-4 text-brand-primary">
                Vigilant was built to fix the relay.
              </p>
              <p>
                The Vigilant team brings deep experience from federal law
                enforcement, military, and intelligence. We've authored
                after-action reports and seen where response breaks down:
                information relay, gaps in communication, and delays moving
                critical data from point A to point B.
              </p>
            </div>
          </motion.div>

          {/* Closing the Gap */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 backdrop-blur-xl border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3
                  className="text-2xl sm:text-3xl mb-4"
                  style={{ fontWeight: 500 }}
                >
                  Closing the Gap
                </h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p
                style={{ fontWeight: 500, color: "white", fontSize: "1.25rem" }}
              >
                Businesses often have advanced command centers, employees don't.
                Vigilant closes that gap.
              </p>
              <p>
                We deliver behavior-aware intelligence over static alerts. Our
                encrypted, privacy-preserving communications enable role-based
                training and readiness at scale, with enterprise support for
                deployment, compliance, and integrations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-center mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Leadership
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Led by former intelligence officers, federal agents, and special
            operations veterans with deep experience in crisis response,
            national security, and executive protection. Our leadership team
            brings the expertise to deliver enterprise-grade safety tools at
            scale.
          </motion.p>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-brand-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-brand-primary/10 to-black/50 border border-white/10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl mb-1" style={{ fontWeight: 500 }}>
                  {founder.name}
                </h3>
                <p className="text-brand-primary mb-3">{founder.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Founder Emeritus */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-3xl border border-brand-primary/20 rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(26,157,143,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Chris Fox Image */}
              <div className="w-48 h-48 flex-shrink-0">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-black/50 border border-brand-primary/30">
                  <img
                    src={chrisFox}
                    alt="Christopher Fox"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 backdrop-blur-xl border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      Christopher Fox
                    </h3>
                    <p className="text-brand-primary text-lg mb-2">
                      <a
                        href="https://www.dni.gov/index.php/who-we-are/organizations/icig/icig-about-us/icig-leadership/icig-ig-bio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Inspector General of the Intelligence Community (ODNI)
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Previously co-founded Vigilant and served as original CEO. His
                  foundational vision continues to shape the mission and values
                  of Vigilant today.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
