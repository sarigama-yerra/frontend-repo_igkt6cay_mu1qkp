import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";

const primary = "#007BFF";
const gold = "#FFD700";

export default function VisionMission() {
  return (
    <section id="vision" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
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
