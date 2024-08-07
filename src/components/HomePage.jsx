import React, {useEffect, useState} from 'react';
import {TbCircleDashed} from "react-icons/tb";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai";
import {BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical} from "react-icons/bs";
import ChatCard from "./chatCard/ChatCard";
import MessageCard from "./messageCard/MessageCard";
import {ImAttachment} from "react-icons/im";
import './HomePage.css'
import Profile from "./profile/Profile";
import {useNavigate} from "react-router-dom";
import {Menu, MenuItem} from "@mui/material";
import CreateGroup from "./group/CreateGroup";
import {useDispatch, useSelector} from "react-redux";
import {logout, searchUser, userProfile} from "../redux/auth/Action";
import {createSingleChat, getUsersChats} from "../redux/chat/Action";
import {getChatMessages, sendMessage} from "../redux/message/Action";

const HomePage = () => {
    const [query, setQuery] = useState('');
    const [currentChat, setCurrentChat] = useState(null);
    const [messageContent, setMessageContent] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth, chat, message} = useSelector(store => store);
    const jwt = localStorage.getItem('jwt');

    const handleSearch = (keyword) => {
        if (keyword) {
            dispatch(searchUser(keyword, jwt));
        }
    }
    const handleSendMessage = () => {
        if (messageContent) {
            dispatch(sendMessage({'chatId': currentChat.id, 'content': messageContent}, jwt));
        }
        setMessageContent('');
    }

    const handleClickChatUser = (userId) => {
        setCurrentChat(true);
        dispatch(createSingleChat({'userId': userId}, jwt));
        setQuery('');
    }

    const handleCurrentChat = (item) => {
        setCurrentChat(item);
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

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signIn');
    }

    useEffect(() => {
        if (jwt) {
            dispatch(userProfile(jwt));
        }
    }, [jwt])

    useEffect(() => {
        if (!auth.userProfile) {
            navigate('/signup');
        }
    }, [auth.userProfile])

    useEffect(() => {
        dispatch(getUsersChats(jwt));
    }, [chat.singleChat, chat.groupChat])

    useEffect(() => {
        if (currentChat) {
            dispatch(getChatMessages(currentChat?.id, jwt));
        }
    }, [currentChat, message.newMessage])

    return (
        <div>
            <div className='py-14 bg-green-500 w-full'></div>
            <div className='flex bg-amber-100 h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
                <div className='left w-[30%] bg-gray-200 h-full'>

                    {/* profile */}
                    {showProfile &&
                        <div className='w-full h-full'><Profile handleCloseProfile={handleCloseProfile}/></div>}

                    {showGroup && <CreateGroup setShowGroup={setShowGroup}/>}


                    {/* Home */}
                    {!showProfile && !showGroup && <div className='w-full'>
                        <div className='flex justify-between items-center p-3'>
                            <div onClick={navigateProfile} className='flex items-center space-x-3'>
                                <img
                                    className='rounded-full w-10 h-10 cursor-pointer'
                                    src='https://cdn.pixabay.com/photo/2023/04/28/20/39/bee-7957348_1280.jpg'
                                    alt=''
                                />
                                <p>{auth.userProfile?.fullName}</p>
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
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
                                    setQuery(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={query}
                            />
                            <AiOutlineSearch className='left-5 top-7 absolute'/>

                            <div>
                                <BsFilter className='ml-4 text-3xl'/>
                            </div>
                        </div>

                        {/*All users*/}
                        <div className='bg-white overflow-y-scroll h-[72vh] px-3'>
                            {
                                query && auth.searchedUsers?.map((item) =>
                                    <div onClick={() => handleClickChatUser(item.id)}>
                                        <hr/>
                                        <ChatCard
                                            chatName={item.fullName}
                                            chatImg={item.profilePicture ||
                                                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                            }
                                        />
                                    </div>)
                            }

                            {
                                !query && chat.userChats?.map((item) =>
                                    <div onClick={() => handleCurrentChat(item)}>
                                        <hr/>

                                        {item.groupChat ? (
                                            <ChatCard
                                                chatName={item.name}
                                                chatImg={item.image ||
                                                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                                }
                                            />
                                        ) : (
                                            <ChatCard
                                                chatName={
                                                    auth.userProfile?.id === item.participants[0]?.id
                                                        ? item.participants[1]?.fullName : item.participants[0]?.fullName
                                                }
                                                chatImg={
                                                    auth.userProfile?.id === item.participants[0]?.id
                                                        ? (item.participants[1]?.profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
                                                        : (item.participants[0]?.profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
                                                }
                                            />
                                        )
                                        }
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
                                     src={currentChat?.groupChat ? (currentChat.profilePicture ||
                                             'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png') :
                                         (auth.userProfile?.id === currentChat.participants[0]?.id
                                             ? (currentChat.participants[1]?.profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png')
                                             : (currentChat.participants[0]?.profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'))

                                     }
                                />
                                <p>
                                    {currentChat?.groupChat ? currentChat?.name :
                                        (auth.userProfile?.id === currentChat.participants[0]?.id ? currentChat.participants[1]?.fullName : currentChat.participants[0]?.fullName)
                                    }
                                </p>
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
                            {message.chatMessages?.map((item, i) => <MessageCard
                                isReqUserMessage={auth.userProfile?.id === item.user.id}
                                content={item.content}/>)}
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