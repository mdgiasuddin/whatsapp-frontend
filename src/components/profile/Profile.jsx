import React, {useState} from "react";
import {BsArrowLeft, BsCheck2, BsPencil} from "react-icons/bs";

const Profile = ({handleCloseProfile}) => {
    const [name, setName] = useState(null);
    const [editName, setEditName] = useState(false);

    const handleEditNameFlag = () => {
        setEditName(true);
    }

    const handleCloseEditName = () => {
        setEditName(false);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div className='w-full h-full'>
            <div className='flex items-center space-x-10 bg-green-900 text-white pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold' onClick={handleCloseProfile}/>
                <p className='cursor-pointer font-semibold'>Profile</p>
            </div>

            {/* profile picture section */}
            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor='imgInput'>
                    <img
                        className='rounded-full w-[15vw] h-[15vh] cursor-pointer'
                        src='https://cdn.pixabay.com/photo/2023/09/11/13/08/dog-8246868_640.jpg' alt=''
                    />
                </label>
                <input type='file' id='imgInput' className='hidden'/>
            </div>

            {/* Name section */}
            <div className='bg-white px-3'>
                <p className='py-3'>Your Name</p>

                {!editName && <div className='w-full flex justify-between items-center'>
                    <p className='py-3'>{name || 'username'}</p>
                    <BsPencil onClick={handleEditNameFlag} className='cursor-pointer'/>
                </div>}

                {editName && <div className='w-full flex justify-between items-center py-2'>
                    <input onChange={handleNameChange} className='w-[80%] outline-none border-b-2 border-blue-700 p-2'
                           type='text'
                           placeholder='Enter your name'/>
                    <BsCheck2 onClick={handleCloseEditName} className='cursor-pointer text-2xl'/>
                </div>}

            </div>

            <div className='px-3 my-5'>
                <p className='py-10'>This is not your username, this name will be visible to your whatsapp contacts.</p>
            </div>
        </div>
    )
}

export default Profile;