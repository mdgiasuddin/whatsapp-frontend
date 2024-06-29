import React, {useEffect, useState} from "react";
import './ProgressBar.css'

const StatusProgressBar = ({index, activeIndex, duration}) => {
    const active = index === activeIndex;
    const [progress, setProgress] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(intervalId);
                return prev;
            })
        }, duration / 100);
    }, [duration, activeIndex]);

    useEffect(() => {
        setProgress(0);
    }, [activeIndex]);

    return (
        <div className={`progress-bar-container ${active ? 'active' : ''}`}>
            <div
                className={`${active ? 'progress-bar' : ''}`}
                style={{width: `${progress}%`}}
            >

            </div>
        </div>
    )
}

export default StatusProgressBar;