import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

const primary = "#007BFF";
const gold = "#FFD700";

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden bg-white" style={{ color: "#0b1220" }}>
      {/* Top navigation */}
      <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg" style={{ color: primary }}>
            Ramdzy Viko Rahman
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#showcase" className="text-gray-700 hover:text-gray-900 transition-colors">Subsidiaries</a>
            <a href="#showcase" className="text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: gold, color: "#1b1b1b" }}
          >
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "#E8F2FF", color: primary }}
          >
            <Rocket size={14} /> Founder & CEO — Deswartha Group
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Ramdzy Viko Rahman
          </h1>
          <p className="text-xl md:text-2xl font-medium" style={{ color: primary }}>
            “Leading Innovation, Inspiring Change”
          </p>
          <p className="text-gray-600 max-w-xl">
            A visionary, trustworthy young leader building impactful companies across technology,
            infrastructure, and services — empowering people and advancing industries with integrity
            and innovation.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow"
              style={{ backgroundColor: primary }}
            >
              Explore Works
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border"
              style={{ borderColor: gold, color: "#0b1220" }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md md:max-w-full md:w-10/12 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1280&auto=format&fit=crop"
              alt="Ramdzy Viko Rahman portrait"
              className="h-full w-full object-cover rounded-3xl shadow-xl"
            />
            <div
              className="absolute -bottom-5 -left-5 h-24 w-24 rounded-2xl shadow-lg"
              style={{ backgroundColor: gold }}
            />
            <div
              className="absolute -top-6 -right-6 h-32 w-32 rounded-full blur-2xl opacity-50 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${primary}, transparent 60%)` }}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
