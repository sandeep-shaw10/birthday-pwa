import { useMemo } from "react";

export default function HeartBackground() {
    const hearts = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: 8 + Math.random() * 8,
            size: 12 + Math.random() * 22,
            opacity: 0.08 + Math.random() * 0.12,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                        fontSize: `${heart.size}px`,
                        opacity: heart.opacity,
                    }}
                >
                    🤍
                </span>
            ))}
        </div>
    );
}