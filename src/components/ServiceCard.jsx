import { motion } from "framer-motion";

export default function ServiceCard({ Icon, title }) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/25 shadow-xl hover:scale-105 transition cursor-pointer"
      whileHover={{ y: -5 }}
    >
      {/* Icon with gradient color */}
      <div className="w-12 h-12 mb-4 bg-blue-950 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </motion.div>
  );
}
