import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Check, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const plans = [
  {
    name: "Team",
    description: "Essential safety tools for growing teams",
    monthlyPrice: 15,
    annualPrice: 12,
    features: [
      "Intel alerts from 10,000+ sources",
      "Secure Comms (E2E encrypted)",
      "Basic Academy training",
      "Standard support",
      "Up to 50 users",
    ],
    cta: "Start Free Trial",
    ctaAction: "trial",
    popular: false,
  },
  {
    name: "Business",
    description: "Advanced features for established organizations",
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      "Everything in Team, plus:",
      "Admin console & dashboards",
      "SSO integration",
      "Advanced reporting",
      "Policy controls",
      "Priority support",
      "Up to 500 users",
    ],
    cta: "Watch Demo",
    ctaAction: "demo",
    popular: true,
  },
  {
    name: "Scale",
    description: "Enterprise-grade for mission-critical operations",
    monthlyPrice: null,
    annualPrice: null,
    features: [
      "Everything in Business, plus:",
      "Custom integrations & API access",
      "Enhanced compliance features",
      "Dedicated Customer Success Manager",
      "99.9% uptime SLA",
      "White-label options available",
      "Unlimited users",
    ],
    cta: "Talk to Sales",
    ctaAction: "contact",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Intel Alerts", team: true, business: true, scale: true },
  { name: "Secure Comms", team: true, business: true, scale: true },
  { name: "Safety Tracking", team: true, business: true, scale: true },
  {
    name: "Academy Training",
    team: "Basic",
    business: "Advanced",
    scale: "Custom",
  },
  { name: "AI Travel Companion", team: true, business: true, scale: true },
  { name: "Admin Console", team: false, business: true, scale: true },
  { name: "SSO Integration", team: false, business: true, scale: true },
  { name: "Advanced Reporting", team: false, business: true, scale: true },
  { name: "API Access", team: false, business: false, scale: true },
  { name: "Dedicated CSM", team: false, business: false, scale: true },
  { name: "Custom Integrations", team: false, business: false, scale: true },
  { name: "SLA", team: false, business: false, scale: "99.9%" },
];

const faqs = [
  {
    question: "What is included in the free trial?",
    answer:
      "The free trial gives you full access to Team plan features for 14 days. No credit card required. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any billing adjustments.",
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer:
      "Absolutely. Our Scale plan can be customized to meet your specific requirements, including custom integrations, compliance needs, and white-label options. Contact our sales team to discuss your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH transfers for annual plans, and can accommodate purchase orders for enterprise accounts.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use end-to-end encryption for all communications, and our platform is SOC 2 compliant. We never sell your data, and you maintain full ownership of all information.",
  },
  {
    question: "How does per-user pricing work?",
    answer:
      "You are billed based on the number of active users in your organization. You can add or remove users at any time, and we will adjust your billing accordingly.",
  },
];

export function Pricing({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleCTA = (action: string) => {
    if (action === "trial") {
      onNavigate?.("beta");
    } else if (action === "demo") {
      window.open(
        "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
        "_blank"
      );
    } else if (action === "contact") {
      onNavigate?.("contact");
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-brand-primary" />
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Pricing
            </h1>
            <Sparkles className="w-8 h-8 text-brand-primary" />
          </div>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Simple, scalable plans for businesses of any size.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm ${
                !isAnnual ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/20 transition-colors cursor-pointer"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-brand-primary transition-transform ${
                  isAnnual ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span
              className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Annual <span className="text-brand-primary">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-[60px] border rounded-2xl p-8 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] transition-all ${
                  plan.popular
                    ? "border-brand-primary shadow-[0_30px_80px_rgba(26,157,143,0.5)] md:scale-105"
                    : "hover:border-brand-primary/40 hover:shadow-[0_30px_80px_rgba(26,157,143,0.3)]"
                }`}
                style={{
                  background: plan.popular
                    ? "linear-gradient(135deg, rgba(26, 157, 143, 0.15) 0%, rgba(30, 58, 95, 0.2) 100%)"
                    : "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  borderColor: plan.popular
                    ? undefined
                    : "rgba(30, 58, 95, 0.3)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl mb-2" style={{ fontWeight: 500 }}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl" style={{ fontWeight: 500 }}>
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-400">/user/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl" style={{ fontWeight: 500 }}>
                      Custom
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleCTA(plan.ctaAction)}
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-brand-primary hover:bg-brand-primary-hover text-white"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/20"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontWeight: 500 }}
          >
            Compare Plans
          </h2>

          <div className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-2xl overflow-hidden shadow-[0_20px_60px_0_rgba(0,0,0,0.5)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-gray-300">Feature</th>
                  <th className="text-center p-4 text-gray-300">Team</th>
                  <th className="text-center p-4 text-gray-300">Business</th>
                  <th className="text-center p-4 text-gray-300">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td className="p-4 text-gray-200">{feature.name}</td>
                    <td className="p-4 text-center">
                      {typeof feature.team === "boolean" ? (
                        feature.team ? (
                          <Check className="w-5 h-5 text-brand-primary mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">{feature.team}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.business === "boolean" ? (
                        feature.business ? (
                          <Check className="w-5 h-5 text-brand-primary mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">
                          {feature.business}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.scale === "boolean" ? (
                        feature.scale ? (
                          <Check className="w-5 h-5 text-brand-primary mx-auto" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )
                      ) : (
                        <span className="text-gray-300">{feature.scale}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl text-center mb-12"
            style={{ fontWeight: 500 }}
          >
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-xl px-6 hover:border-brand-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left text-white hover:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
