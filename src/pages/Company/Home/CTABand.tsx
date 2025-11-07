import { Button } from "../../../components/ui/button";

export function CTABand({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-white/30 text-white relative">
      <div className="absolute inset-0" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl tracking-tight mb-6">
          Keep your team informed, connected, and protected
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Everywhere they work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
                  "_blank"
                )
              }
              className="relative text-base px-8 py-6 w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover text-white border-0 shadow-[0_8px_32px_0_rgba(26,157,143,0.4)] backdrop-blur-xl"
              style={{ fontWeight: 500 }}
            >
              Book a Demo
            </Button>
          </div>
          <div className="relative">
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate?.("beta")}
              className="relative text-base px-8 py-6 w-full sm:w-auto border-white/20 bg-white/[0.03] text-white hover:bg-white/10 hover:text-brand-primary backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              style={{ fontWeight: 500 }}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
