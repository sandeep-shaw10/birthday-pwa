import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Sparkles() {
    const particles = useMemo(
        () =>
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 4 + Math.random() * 6,
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 3,
            })),
        []
    );

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: p.size,
                        height: p.size,
                        background: "var(--accent)",
                        boxShadow: "0 0 10px var(--accent)",
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.8, 1],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                    }}
                />
            ))}
        </>
    );
}