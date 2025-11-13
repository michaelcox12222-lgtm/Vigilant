import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqs = [
  {
    question: "How does Vigilant protect my privacy?",
    answer:
      "We use end-to-end encryption for all communications and never sell your data. Location data is only shared with people you explicitly authorize, and you can disable tracking anytime. We aggregate intelligence from public sources without storing personal information.",
  },
  {
    question: "What data sources do you use?",
    answer:
      "Vigilant monitors over 10,000 sources including government alerts, news agencies, social media, weather services, and verified local reports. Our AI filters and verifies information to ensure you receive accurate, actionable intelligence.",
  },
  {
    question: "Which areas does Vigilant cover?",
    answer:
      "Vigilant provides global coverage across 195+ countries. Alert density is highest in major cities and tourist destinations, but our AI Travel Companion can brief you on any location worldwide.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about Vigilant.
          </p>
        </div>

        <div
          className="backdrop-blur-[60px] rounded-2xl border p-6 md:p-8 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(30, 58, 95, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
            borderColor: "rgba(30, 58, 95, 0.3)",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-lg text-white hover:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
