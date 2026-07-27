import { useEffect, useState } from "react";

export default function Typewriter({
    text,
    speed = 35,
}) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        setDisplayed("");

        let i = 0;

        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));

            i++;

            if (i >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <p
            className="
                whitespace-pre-line
                text-lg
                leading-8
            "
            style={{
                color: "var(--accent)",
            }}
        >
            {displayed}
        </p>
    );
}