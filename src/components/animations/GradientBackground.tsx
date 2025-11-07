export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Gradient that transitions from pure black to blue-gray */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #000000 40%, #1e3a5f 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
