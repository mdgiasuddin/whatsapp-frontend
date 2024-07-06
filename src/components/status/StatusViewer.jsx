import React, {useEffect, useState} from "react";
import {stories} from "./DummyStory";
import StatusProgressBar from "./StatusProgressBar";
import {BsArrowLeft} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const StatusViewer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < stories?.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setActiveIndex(activeIndex + 1);
            } else {
                setCurrentIndex(0);
                setActiveIndex(0);
            }

        }, 2000);

        return () => clearInterval(intervalId);

    }, [activeIndex, currentIndex]);

    const handleClose = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className='relative flex justify-center items-center h-[100vh] bg-slate-900'>
                <div className='relative'>
                    <img
                        className='max-h-[96vh] object-contain'
                        src={stories?.[currentIndex].image}
                        alt=''
                    />
                    <div className='absolute top-0 flex w-full'>
                        {stories.map((item, index) => <StatusProgressBar duration={2000} index={index}
                                                                         activeIndex={activeIndex}/>)}
                    </div>
                </div>

                <div>
                    <BsArrowLeft onClick={handleClose}
                                 className='text-white text-2xl cursor-pointer absolute top-10 left-10'/>
                    <AiOutlineClose onClick={handleClose}
                                    className='text-white text-2xl cursor-pointer absolute top-10 right-10'/>
                </div>
            </div>
        </div>
    )
}

export default StatusViewer;