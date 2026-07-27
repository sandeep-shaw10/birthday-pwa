import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "./Typewriter";


export default function WishModal({ open, onClose, data }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{
                            duration: 0.35,
                            ease: "easeOut",
                        }}
                    >
                        <div
                            className="
                                relative

                                w-full
                                max-w-2xl

                                rounded-3xl

                                border border-white/20

                                bg-white/10

                                backdrop-blur-xl

                                shadow-2xl

                                p-8

                                text-center
                            "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}

                            <button
                                onClick={onClose}
                                className="
                                    absolute

                                    right-5
                                    top-5

                                    text-2xl

                                    hover:rotate-90

                                    transition
                                "
                            >
                                ✕
                            </button>

                            <div
                                className="
                                    absolute

                                    -top-20
                                    left-1/2

                                    -translate-x-1/2

                                    w-64
                                    h-64

                                    rounded-full

                                    blur-[100px]

                                    pointer-events-none
                                "

                                style={{
                                    background: "var(--glow)",
                                }}
                            />

                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                                className="
                                    text-4xl
                                    md:text-5xl
                                    font-extrabold
                                    mb-6
                                "
                            >
                                Happy Birthday ❤️
                            </motion.h2>

                            <h3
                                className="
                                    text-2xl
                                    md:text-3xl
                                    font-bold
                                    mb-6
                                    bg-clip-text
                                "
                                // style={{
                                // background:
                                //     "linear-gradient(90deg,var(--accent),white,var(--secondary))",
                                // }}
                            >
                                {data.name}
                            </h3>

                            <Typewriter
                                text={data.wish}
                                speed={35}
                            />

                            <p
                                className="mt-10"
                                style={{
                                    color: "var(--accent)",
                                }}
                            >
                                — {data.author}
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}