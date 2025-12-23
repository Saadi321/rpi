import { motion } from 'framer-motion';

interface ReadingProgressBarProps {
  progress: number;
}

export const ReadingProgressBar = ({ progress }: ReadingProgressBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/50">
      <motion.div
        className="h-full bg-gradient-to-r from-secondary to-green-400"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
};
