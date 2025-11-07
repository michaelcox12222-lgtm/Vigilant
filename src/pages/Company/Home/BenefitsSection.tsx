import { Radio, Shield, GraduationCap, LayoutDashboard } from "lucide-react";

const benefits = [
  {
    icon: Radio,
    title: "Real-Time, Location-Aware Alerts",
    description:
      "Deliver immediate, location-relevant threat intel from 10,000+ global sources to the right teams and individuals.",
  },
  {
    icon: Shield,
    title: "End-to-End Encrypted Comms",
    description:
      "Coordinate with encrypted messaging, SOS, and rally points—even when conditions are chaotic.",
  },
  {
    icon: GraduationCap,
    title: "Behavior-Aware Guidance & Training",
    description:
      "Role-based training and in-app guidance tailored to each situation—reinforcing readiness when it matters.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards for Oversight",
    description:
      "Track deployment, monitor team locations, assign courses, and maintain accountability across your organization.",
  },
];

export function BenefitsSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Always Connected, Always Secure, Always In Reach
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vigilant scales like a communications platform: one deployment connects thousands on a single secure infrastructure all on an easy to use mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl border backdrop-blur-[60px] hover:border-brand-primary/40 transition-all shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(26,157,143,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                borderColor: "rgba(30, 58, 95, 0.3)",
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-brand-primary/20 backdrop-blur-[40px] border border-brand-primary/30 flex items-center justify-center mb-4 shadow-xl shadow-brand-primary/40">
                <benefit.icon className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
