import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import VisionMission from "./components/VisionMission";
import Contact from "./components/Contact";

const primary = "#007BFF";
const gold = "#FFD700";

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900" style={{ fontFamily: 'Inter, Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      {/* Accent top border */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${gold}, ${primary})` }} />

      <Hero />
      <About />
      <Showcase />
      <VisionMission />
      <Contact />
    </div>
  );
}

export default App;
