import React, {useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical} from "react-icons/bs";
import ChatCard from "./ChatCard/ChatCard";
import MessageCard from "./MessageCard/MessageCard";
import {ImAttachment} from "react-icons/im";
import './HomePage.css'
import Profile from "./Profile/Profile";
import {useNavigate} from "react-router-dom";
import {Menu, MenuItem} from "@mui/material";
import CreateGroup from "./Group/CreateGroup";

const HomePage = () => {
    const [querys, setQuerys] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [messageContent, setMessageContent] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
    }
    const handleSendMessage = () => {
    }
    const handleClickChatUser = () => {
        setCurrentChat(true)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateProfile = () => {
        setShowProfile(true)
    }

    const handleCloseProfile = () => {
        setShowProfile(false)
    }

    const handleCreateGroup = () => {
        setShowGroup(true);
    }

    return (
        <div>
            <div className='py-14 bg-green-500 w-full'></div>
            <div className='flex bg-amber-100 h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
                <div className='left w-[30%] bg-gray-200 h-full'>

                    {/* Profile */}
                    {showProfile &&
                        <div className='w-full h-full'><Profile handleCloseProfile={handleCloseProfile}/></div>}

                    {showGroup && <CreateGroup/>}


                    {/* Home */}
                    {!showProfile && !showGroup && <div className='w-full'>
                        <div className='flex justify-between items-center p-3'>
                            <div onClick={navigateProfile} className='flex items-center space-x-3'>
                                <img
                                    className='rounded-full w-10 h-10 cursor-pointer'
                                    src='https://cdn.pixabay.com/photo/2023/04/28/20/39/bee-7957348_1280.jpg'
                                    alt=''
                                />
                                <p>username</p>
                            </div>
                            <div className='space-x-3 text-2xl flex'>
                                <TbCircleDashed className='cursor-pointer' onClick={() => navigate('/status')}/>
                                <BiCommentDetail/>

                                <div>
                                    <BsThreeDotsVertical
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    />

                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </div>

                            </div>
                        </div>

                        <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                            <input
                                className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2'
                                type='text'
                                placeholder='Search or start new chat'
                                onChange={(e) => {
                                    setQuerys(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={querys}
                            />
                            <AiOutlineSearch className='left-5 top-7 absolute'/>

                            <div>
                                <BsFilter className='ml-4 text-3xl'/>
                            </div>
                        </div>

                        {/*All users*/}
                        <div className='bg-white overflow-y-scroll h-[72vh] px-3'>
                            {
                                querys && [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) =>
                                    <div onClick={handleClickChatUser}>
                                        <hr/>
                                        <ChatCard/>
                                    </div>)
                            }
                        </div>

                    </div>}
                </div>
                {/*Default whatsapp page*/}
                {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                    <div className='max-w-[70%] text-center'>
                        <img
                            src='https://global.discourse-cdn.com/brave/original/3X/a/5/a57b2034cb4ec01f7f226f7f442a30f64b9ec4f5.png'
                            alt=''
                        />
                        <h1 className='text-4xl text-gray-600'>Whatsapp Web</h1>
                        <p className='my-9'>Send and receive message without keeping your phone online. Whatsapp on
                            up to 4 Linked devices and 1 phone at the same time</p>
                    </div>
                </div>}

                {/*Message Part*/}
                {currentChat && <div className='w-[70%] relative'>
                    <div className='header absolute top-0 w-full bg-gray-300'>
                        <div className='flex justify-between'>
                            <div className='py-3 space-x-4 flex items-center px-3'>
                                <img className='w-10 h-10 rounded-full'
                                     src='https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_640.jpg' alt=''
                                />
                                <p>Username</p>
                            </div>
                            <div className='py-3 flex space-x-4 items-center px-3'>
                                <AiOutlineSearch/>
                                <BsThreeDotsVertical/>
                            </div>
                        </div>
                    </div>

                    {/*Message section*/}
                    <div className='px-10 h-[85vh] overflow-y-scroll'>
                        <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => <MessageCard
                                isReqUserMessage={i % 2 === 0}
                                content={'Message'}/>)}
                        </div>
                    </div>

                    {/*Footer Part*/}
                    <div className='footer bg-gray-200 absolute bottom-0 w-full py-3 text-2xl'>
                        <div className='flex justify-between items-center px-5 relative'>
                            <BsEmojiSmile className='cursor-pointer'/>
                            <ImAttachment/>

                            <input
                                className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
                                type='text'
                                onChange={(e) => setMessageContent(e.target.value)}
                                placeholder='Type message'
                                value={messageContent}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                        setMessageContent('')
                                    }
                                }}
                            />
                            <BsMicFill/>
                        </div>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default HomePage;