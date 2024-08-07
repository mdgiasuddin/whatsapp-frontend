import React from "react";

const MessageCard = ({isReqUserMessage, content}) => {
    return (
        <div
            className={`py-2 px-2 rounded-md max-w-[50%] ${isReqUserMessage ? 'self-end bg-green-400' : 'self-start bg-white'} `}>
            <p>{content}</p>
        </div>
    )
}

export default MessageCard;