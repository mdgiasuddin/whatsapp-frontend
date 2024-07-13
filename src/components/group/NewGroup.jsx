import React, {useState} from "react";
import {BsArrowLeft, BsCheck2} from "react-icons/bs";
import {CircularProgress} from "@mui/material";
import {useDispatch} from "react-redux";
import {createGroupChat} from "../../redux/chat/Action";

const NewGroup = ({groupMembers, setShowGroup}) => {
    const [imageUploading, setImageUploading] = useState(false);
    const [groupName, setGroupName] = useState('');
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');

    const handleCreateGroup = () => {
        let userIds = [];
        for (let user of groupMembers) {
            userIds.push(user.id);
        }

        const data = {
            'userIds': userIds,
            'chatName': groupName,
            'chatImage': null
        }

        dispatch(createGroupChat(data, jwt));
        setShowGroup(false);
    }

    return (
        <div className='w-full h-full'>
            <div className='flex items-center space-x-10 bg-green-800 text-white pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
                <p className='text-xl font-semibold'>New Group</p>
            </div>

            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor='imgInput' className='relative'>
                    <img
                        className='h-20 w-20 rounded-full'
                        src='https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png'
                        alt=''
                    />
                    {imageUploading && (<CircularProgress className='absolute top-[5rem] left-[6rem]'/>)}
                </label>

                <input
                    type='file'
                    id='imgInput'
                    className='hidden'
                    onChange={() => console.log('imageOnChange')}
                />
            </div>

            <div className='w-full flex justify-center items-center py-2 px-5'>
                <input
                    className='w-full outline-none border-b-2 border-green-700 px-2 bg-transparent'
                    type='text'
                    placeholder='Group Subject'
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
            </div>

            {groupName && (
                <div className='py-10 bg-slate-200 flex items-center justify-center'>
                    <button onClick={handleCreateGroup}>
                        {' '}
                        <div className='bg-green-700 rounded-full p-4'>
                            <BsCheck2 className='text-white font-bold text-3xl'/>
                        </div>
                        {' '}
                    </button>
                </div>
            )}
        </div>
    )
}

export default NewGroup;