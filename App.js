import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="text-white overflow-x-hidden">
      <HeroSection />

      {/* Extra content for scroll space */}
      <section className="h-[200vh] bg-neutral-950 flex items-center justify-center">
        <h2 className="text-4xl tracking-widest opacity-40">
          SCROLL EXPERIENCE
        </h2>
      </section>
    </div>
  );
}

export default App;