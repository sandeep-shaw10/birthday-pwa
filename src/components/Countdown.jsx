import { useEffect, useState } from "react";
import {
    getBirthdayState,
    getRemainingTime,
} from "../utils/birthdayUtils";

export default function Countdown({ data }) {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const { isBirthday, nextBirthday } = getBirthdayState(data);

    useEffect(() => {
        if (isBirthday) return;

        const update = () => {
            setTime(getRemainingTime(nextBirthday));
        };

        update();

        const timer = setInterval(update, 1000);

        return () => clearInterval(timer);
    }, [nextBirthday, isBirthday]);

    if (isBirthday) {
        return (
            <p
                className="mt-6 text-lg"
                style={{
                    color: "var(--accent)",
                }}
            >
                🎉 Birthday Month is Here!
            </p>
        );
    }

    return (
            <div
                className="
                    mt-8
                    flex
                    justify-center
                    gap-5
                    text-center

                    max-[528px]:grid
                    max-[528px]:grid-cols-2
                    max-[528px]:gap-3
                "
            >
            {[
                ["Days", time.days],
                ["Hours", time.hours],
                ["Minutes", time.minutes],
                ["Seconds", time.seconds],
            ].map(([label, value]) => (
                <div
                    key={label}
                    className="
                        backdrop-blur-md
                        rounded-xl
                        px-4
                        py-3
                        min-w-[78px]

                        max-[528px]:min-w-0
                        max-[528px]:w-full
                    "
                    style={{
                        background: "var(--card)",
                        border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
                    }}
                >
                    <div className="text-2xl font-bold">
                        {String(value).padStart(2, "0")}
                    </div>

                    <div
                        className="text-xs uppercase tracking-widest"
                        style={{
                            color: "var(--accent)",
                        }}
                    >
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}