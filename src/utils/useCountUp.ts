import { useEffect, useState } from "react";

export const useCountUp = (end: number, duration = 1500) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);

            setValue(Math.floor(percentage * end));

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [end, duration]);

    return value;
};
