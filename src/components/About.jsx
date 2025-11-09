import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";

const primary = "#007BFF";
const gold = "#FFD700";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: primary }}>
              About Ramdzy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ramdzy Viko Rahman, known as Bos, is the Founder & CEO of Deswartha Group — a
              diversified holding company overseeing 16 subsidiaries across technology, energy,
              infrastructure, real estate, finance, and services. He is dedicated to building
              resilient organizations that prioritize ethical leadership, sustainable growth, and
              meaningful impact.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Guided by the belief that innovation should serve people, Ramdzy leads with
              purpose — empowering teams, forging strategic partnerships, and delivering
              long-term value to communities.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              "Visionary Leadership",
              "Ethical Governance",
              "Sustainable Innovation",
              "Strategic Partnerships",
              "Operational Excellence",
              "Community Impact",
            ].map((item) => (
              <li key={item} className="rounded-2xl border p-5 shadow-sm bg-white">
                <span className="font-semibold" style={{ color: primary }}>{item}</span>
                <p className="text-sm text-gray-600 mt-1">
                  Demonstrated through real outcomes and lasting value.
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border p-8 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Compass size={22} style={{ color: primary }} />
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a catalyst of transformation in Indonesia and beyond — building companies that
              set new standards in trust, innovation, and sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl border p-8 bg-white shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={22} style={{ color: gold }} />
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Drive innovation that solves real problems for people and businesses.</li>
              <li>• Lead with integrity, transparency, and long-term impact.</li>
              <li>• Empower teams to do their life’s best work.</li>
              <li>• Build strategic ventures that strengthen national competitiveness.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
