import { motion } from 'framer-motion';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-slate-800 to-secondary flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary border-l-secondary"></div>
          <div className="absolute inset-4 rounded-full bg-white/10 backdrop-blur-sm"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-white">Loading RPI</h2>
          <p className="text-slate-300 text-sm">Preparing your experience...</p>
        </motion.div>

        <motion.div
          className="flex gap-1 justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
