import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const primary = "#007BFF";
const gold = "#FFD700";

export default function Contact() {
  return (
    <footer id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border bg-white p-8 md:p-10 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: primary }}>
            Let’s build something meaningful
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            For partnerships, speaking engagements, media inquiries, or new ventures — reach out.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="mailto:hello@deswartha.com" className="rounded-2xl border p-6 hover:shadow-md bg-white transition-shadow">
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: primary }} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 text-sm">hello@deswartha.com</div>
                </div>
              </div>
            </a>
            <a href="tel:+620000000000" className="rounded-2xl border p-6 hover:shadow-md bg-white transition-shadow">
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: primary }} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600 text-sm">+62 000-0000-000</div>
                </div>
              </div>
            </a>
            <div className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-3">
                <MapPin size={18} style={{ color: gold }} />
                <div>
                  <div className="font-semibold">Head Office</div>
                  <div className="text-gray-600 text-sm">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Ramdzy Viko Rahman — Deswartha Group</span>
            <span>
              Crafted with excellence <span style={{ color: gold }}>•</span> Leadership with impact
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
