import { useEffect, useRef, useState, useMemo } from "react";
import confetti from "canvas-confetti";
import HeartBackground from "./components/HeartBackground";
import Countdown from "./components/Countdown";
import WishModal from "./components/WishModal";
import HeartBurst from "./components/HeartBurst";
import Sparkles from "./components/Sparkles";
import { themes } from "./utils/theme";
import { getBirthdayState } from "./utils/birthdayUtils";
import dataJson from "./data/data.json";
import image from "./assets/img.webp";
import music from "./assets/music.mp3";
import { FaGithub } from "react-icons/fa";

function App() {

    const data = useMemo(
        () => ({
            ...dataJson,
            image,
            music,
        }),
        []
    );
    
    const audioRef = useRef(null);
    const [showWish, setShowWish] = useState(false);
    const theme = themes[data?.theme] || themes.purple;
    const { isBirthday } = data ? getBirthdayState(data) : { isBirthday: false };



    useEffect(() => {
        if (!theme) return;
    
        const root = document.documentElement;
    
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    
    }, [theme]);

    useEffect(() => {
        audioRef.current = new Audio(music);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;
    
        return () => {
            audioRef.current?.pause();
        };
    }, []);

    const openWish = () => {
        if (!isBirthday) return;
        setShowWish(true);
    
        const duration = 2500;
        const end = Date.now() + duration;
        
        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 70,
                origin: { x: 0 },
            });
        
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 70,
                origin: { x: 1 },
            });
        
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    
        audioRef.current
            ?.play()
            .catch(() => {});
    };

    const closeWish = () => {
        setShowWish(false);
    
        audioRef.current?.pause();
        audioRef.current.currentTime = 0;
    };

    if (!data)
        return (
            <div
                className="flex h-screen items-center justify-center text-2xl text-white"
                style={{ background: "var(--bgStart)" }}
            >
                Loading...
            </div>
        );

    return (
        <div
        className="relative min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden flex flex-col text-white"
        style={{
            background:
                "linear-gradient(135deg,var(--bgStart),var(--bgMiddle),var(--bgEnd))",
        }}
        >

        <HeartBackground />

        {/* Main Content */}
        <main
            className="
                flex-1
                lg:h-[calc(100vh-56px)]
                overflow-visible
                lg:overflow-hidden
                px-4
                md:px-8
            "
        >

            <div
                className="
                    grid
                    lg:grid-cols-2

                    gap-8
                    lg:gap-10

                    items-center

                    py-8
                    lg:py-0

                    h-full
                "
            >
        
                {/* LEFT */}
                <div className="relative grid justify-items-center items-center h-full">

                    <Sparkles />

                    {/* Glow */}
                    <div
                    style={{
                        background: "var(--glow)",
                    }}
                        className={`
                            absolute
                            top-[18%]
                            left-1/2
                            -translate-x-1/2

                            rounded-full

                            blur-[90px]

                            transition-all
                            duration-700

                            ${
                                showWish
                                    ? "w-[420px] h-[420px] opacity-100"
                                    : "w-80 h-80 opacity-60"
                            }
                        `}
                    />

                    <img
                        src={data.image}
                        alt={data.name}
                        style={{
                            filter: "drop-shadow(0 0 60px var(--primary))",
                        }}
                        className={`
                            relative
                            z-10

                            w-[60vw]
                            max-w-[220px]
                            sm:w-[58vw]
                            sm:max-w-[260px]
                            md:max-w-sm
                            lg:max-w-md
                            xl:max-w-lg

                            h-auto
                            object-contain


                            animate-float
                            hover:scale-105
                            transition-transform
                            duration-500
                            cursor-pointer

                            transition-all
                            duration-700

                            ${showWish ? "scale-110" : "scale-100"}
                        `}
                    />

                    <HeartBurst show={showWish} />

                </div>

                {/* RIGHT */}
                <div className="relative z-20 flex justify-center lg:justify-start">
                    <div 
                        style={{
                            background: "var(--card)",
                            }} 
                        className="grid justify-center relative animate-card w-full max-w-xl rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-10 transition-all duration-500">
                        
                    <div
                        className="
                            absolute

                            inset-0

                            rounded-3xl

                            bg-gradient-to-br


                            via-transparent

                            to-transparent

                            pointer-events-none
                        "
                        style={{
                            background:
                                "linear-gradient(to bottom right,var(--glow),transparent)",
                        }}
                    />

                        <div>
                            <h1 className="pb-2 text-4xl md:text-4xl xl:text-5xl font-extrabold bg-gradient-to-r bg-clip-text" >
                                {isBirthday ? "Happy Birthday 🤍" : "Compiling... ✨"}
                            </h1>
                            

                            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white ">
                                {data.name}
                            </h2>
                        </div>

                        <p className=" mt-2" style={{
                            color: "var(--accent)",
                        }}>
                            {isBirthday
                                ? "It's your special month! 🎉"
                                : "Counting down to your special day ✨"}
                        </p>

                        <Countdown data={data} />

                        <div className={isBirthday ? "" : "justify-self-center"}>
                            <button 
                                onClick={isBirthday ? openWish : undefined}
                                disabled={!isBirthday}
                                className="
                                    group
                                    relative

                                    mt-8

                                    overflow-hidden

                                    rounded-2xl

                                    px-8
                                    py-4

                                    font-semibold
                                    text-lg

                                    shadow-xl

                                    transition-all
                                    duration-300

                                    hover:scale-105
                                    hover:shadow-xl

                                    active:scale-95

                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                    disabled:hover:scale-100
                                "

                                style={{
                                    background: "linear-gradient(90deg,var(--primary),var(--secondary))",
                                    boxShadow: "0 8px 24px var(--glow)",
                                }}
                            >

        {/* Hover Glow */}
        <div
            className="
                absolute
                inset-0
                rounded-2xl
                blur-xl
                opacity-0
                group-hover:opacity-100
                transition
            "

            style={{
                background: "var(--glow)",
            }}
        />

        {/* Shimmer */}
        <span
            className="
                absolute
                inset-y-0
                left-0

                w-16

                bg-white/30

                blur-md

                skew-x-[-20deg]

                animate-shimmer
            "
        />

        {/* Text */}
        <span className="relative z-10 flex items-center justify-center gap-2">
            <span className="text-2xl animate-bounce">{isBirthday ? "🎁" : "🔒"}</span>
            <span>
                {isBirthday
                    ? "Open Birthday Wish"
                    : "Available on Birthday Month"}
            </span>
        </span>

                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </main>

        {showWish && isBirthday && (
    <button
        onClick={() => {
            if (!audioRef.current) return;

            if (audioRef.current.paused)
                audioRef.current.play();
            else
                audioRef.current.pause();
        }}
        className="
            fixed
            bottom-20
            right-5
            z-30
            h-14
            w-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            text-2xl
            shadow-xl
            hover:scale-110
            transition
        "
    >
        🎵
    </button>
)}

        <WishModal
            open={showWish && isBirthday}
            onClose={closeWish}
            data={data}
        />

        {/* Footer */}

        <footer
            className="
                h-14
                flex
                items-center
                justify-center
                gap-2
                mt-4
                text-sm
            "
        >
            <span>Made with ❤️ by</span>

            <a
                href="https://github.com/sandeep-shaw10/birthday-pwa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold hover:text-purple-300 transition"
            >
                <FaGithub />
                {data.author}
            </a>
        </footer>

      </div>
    );
}

export default App;