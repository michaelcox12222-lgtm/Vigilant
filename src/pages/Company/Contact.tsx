import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Handle form submission (mock for now)
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.15]"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Talk to <span className="text-brand-primary">Vigilant</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Evaluating enterprise licensing, custom training, or API/white-label
            options? Send us a note and we'll match you with a specialist. For
            support and security inquiries, we respond with priority.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-[#2a3441]/80 backdrop-blur-[60px] rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_0_rgba(0,0,0,0.6)] border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Contact us
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <Label
                  htmlFor="firstName"
                  className="text-white mb-2 block"
                  style={{ fontWeight: 400 }}
                >
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-[#d4e5e3] border-0 text-gray-900 placeholder:text-gray-600 h-12 rounded-lg"
                  style={{ fontWeight: 400 }}
                />
              </div>

              {/* Last Name */}
              <div>
                <Label
                  htmlFor="lastName"
                  className="text-white mb-2 block"
                  style={{ fontWeight: 400 }}
                >
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-[#d4e5e3] border-0 text-gray-900 placeholder:text-gray-600 h-12 rounded-lg"
                  style={{ fontWeight: 400 }}
                />
              </div>

              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-white mb-2 block"
                  style={{ fontWeight: 400 }}
                >
                  Email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#d4e5e3] border-0 text-gray-900 placeholder:text-gray-600 h-12 rounded-lg"
                  style={{ fontWeight: 400 }}
                />
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="message"
                  className="text-white mb-2 block"
                  style={{ fontWeight: 400 }}
                >
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-[#d4e5e3] border-0 text-gray-900 placeholder:text-gray-600 rounded-lg resize-none"
                  style={{ fontWeight: 400 }}
                />
              </div>

              {/* Disclaimer */}
              <div className="pt-2">
                <p className="text-xs text-gray-400 leading-relaxed">
                  By submitting this form, you agree to be contacted by Vigilant
                  Inc. via email, phone, or text message regarding your inquiry or
                  related services. Message and data rates may apply. Message
                  frequency varies. You may opt out at any time by replying STOP
                  or emailing contact@govigilant.app
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white h-14 rounded-full shadow-[0_8px_32px_0_rgba(26,157,143,0.4)] hover:shadow-[0_12px_48px_0_rgba(26,157,143,0.6)] transition-all border-0"
                  style={{ fontWeight: 500 }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
