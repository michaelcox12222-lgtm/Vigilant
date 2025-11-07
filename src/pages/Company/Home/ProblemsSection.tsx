import { Card, CardContent } from "../../../components/ui/card";
import { MapPin, Building2, Users, Globe, Shield, Radio } from "lucide-react";

const problems = [
  {
    icon: MapPin,
    title: "Field Staff & Traveling Employees",
    description:
      "Real-time, location-aware alerts reach your team instantly—no command center required.",
  },
  {
    icon: Shield,
    title: "Security & Response Teams",
    description:
      "Coordinate with end-to-end encrypted comms, SOS, and rally points during critical incidents.",
  },
  {
    icon: Building2,
    title: "Corporate & Campus Safety",
    description:
      "Monitor live locations, track threat proximity, and maintain duty-of-care for distributed teams.",
  },
  {
    icon: Users,
    title: "Organizations & Enterprises",
    description:
      "Deploy role-based training, admin dashboards, and secure infrastructure at scale.",
  },
  {
    icon: Globe,
    title: "Distributed Workforces",
    description:
      "Close the awareness gap with behavior-aware guidance delivered to thousands on one platform.",
  },
  {
    icon: Radio,
    title: "Emergency Response",
    description:
      "Access threat intelligence from 10,000+ sources to act in the critical first minutes.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Enterprise-grade safety. Built for small & mid-sized teams.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Developed by former FBI, military, and intelligence professionals to bring government-grade safety directly to your organization.
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
