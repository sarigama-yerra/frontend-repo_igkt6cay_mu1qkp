import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

const primary = "#007BFF";
const gold = "#FFD700";

const subsidiaries = [
  "Deswartha Tech",
  "Deswartha Energy",
  "Deswartha Infra",
  "Deswartha Realty",
  "Deswartha Finance",
  "Deswartha Capital",
  "Deswartha Logistics",
  "Deswartha Agro",
  "Deswartha Marine",
  "Deswartha Health",
  "Deswartha Edu",
  "Deswartha Media",
  "Deswartha Labs",
  "Deswartha Security",
  "Deswartha Retail",
  "Deswartha Hospitality",
];

const portfolio = [
  {
    title: "Smart City IoT Grid",
    tag: "Technology",
    img: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Green Energy Farm",
    tag: "Energy",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Coastal Logistics Hub",
    tag: "Logistics",
    img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthcare Platform",
    tag: "HealthTech",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Building2 size={20} style={{ color: primary }} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Deswartha Group Subsidiaries</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            A portfolio of 16 companies accelerating progress across strategic industries.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {subsidiaries.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="rounded-xl border bg-white p-4 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: "#E5F0FF" }}
              >
                <span className="block truncate" style={{ color: primary }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={20} style={{ color: gold }} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Project Portfolio</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="text-xs font-bold tracking-wide uppercase" style={{ color: gold }}>{p.tag}</span>
                  <h3 className="text-white text-xl font-semibold mt-1">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
