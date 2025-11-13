import { Card, CardContent } from "../../../components/ui/card";
import { MapPin, Building2, Users, Shield, Radio, Brain } from "lucide-react";

const problems = [
  {
    icon: Radio,
    title: "Live Safety Alerts",
    description:
      "Know what's happening nearby in real time, from local incidents to major news.",
  },
  {
    icon: MapPin,
    title: "Location Sharing",
    description:
      "Share your live location with friends and family you trust.",
  },
  {
    icon: Shield,
    title: "Private Chat",
    description:
      "Send secure messages or trigger an SOS when you need help fast.",
  },
  {
    icon: Users,
    title: "AI Safety Chat",
    description:
      "Ask questions and get quick, practical tips, what to do, who to call, how to stay calm.",
  },
  {
    icon: Building2,
    title: "Smart Guidance",
    description:
      "Follow clear, step-by-step instructions right on your screen when it matters most.",
  },
  {
    icon: Brain,
    title: "Predictive AI",
    description:
      "Stay one step ahead with our smart technology, helping you avoid risks before they happen.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Stay safe wherever you go
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get real-time safety alerts, share your location with people you
            trust, and chat securely, everything in one simple app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border backdrop-blur-[60px] shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)] hover:border-brand-primary/40 transition-all"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                borderColor: "rgba(30, 58, 95, 0.3)",
              }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center mb-4 shadow-xl shadow-brand-primary/40">
                  <problem.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl text-white mb-2">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
