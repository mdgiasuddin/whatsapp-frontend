import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const SelectedMember = ({handleRemoveMember, member}) => {
    return (
        <div className='flex items-center bg-slate-300 rounded-full'>
            <img className='w-7 h-7 rounded-full'
                 src='https://cdn.pixabay.com/photo/2023/07/04/17/13/mallow-8106680_640.jpg' alt=''/>
            <p className='px-7'>Username</p>
            <AiOutlineClose onClick={handleRemoveMember} className='pr-1 cursor-pointer'/>
        </div>
    )
}

export default SelectedMember;