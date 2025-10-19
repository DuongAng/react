import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MessageCardProps {
  icon: ReactNode;
  title: string;
  message: string;
  delay?: number;
}

export function MessageCard({ icon, title, message, delay = 0 }: MessageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-pink-500">{icon}</div>
        <h3 className="text-pink-600">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}
