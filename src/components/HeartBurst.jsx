import { motion, AnimatePresence } from "framer-motion";

export default function HeartBurst({ show }) {
    return (
        <AnimatePresence>
            {show &&
                [...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 text-2xl pointer-events-none"
                        initial={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                            scale: 0.5,
                        }}
                        animate={{
                            x: (Math.random() - 0.5) * 300,
                            y: (Math.random() - 0.5) * 300,
                            opacity: 0,
                            scale: 1.4,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.4,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
        </AnimatePresence>
    );
}