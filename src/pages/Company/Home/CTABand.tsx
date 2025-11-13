import appStoreImage from "../../../assets/app-store.png";
import googlePlayImage from "../../../assets/google-play.png";
import { motion } from "framer-motion";

export function CTABand({
}: {}) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-white/30 text-white relative">
      <div className="absolute inset-0" />
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl tracking-tight mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Simple safety for everyday life
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Wherever life takes you, Vigilant goes too.
        </motion.p>

        {/* App Store Badges */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-12 relative z-[2]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
