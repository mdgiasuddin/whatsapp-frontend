import React, {useState} from "react";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import SelectedMember from "./SelectedMember";
import ChatCard from "../chatCard/ChatCard";
import NewGroup from "./NewGroup";
import {searchUser} from "../../redux/auth/Action";
import {useDispatch, useSelector} from "react-redux";

const CreateGroup = ({setShowGroup}) => {
    const [newGroup, setNewGroup] = useState(false);
    const [groupMembers, setGroupMembers] = useState(new Set());
    const [query, setQuery] = useState('');
    const jwt = localStorage.getItem('jwt');
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store);


    const handleRemoveMember = (item) => {
        groupMembers.delete(item);
        setGroupMembers(groupMembers);
    }

    const handleSearch = (keyword) => {
        if (keyword) {
            dispatch(searchUser(keyword, jwt));
        }
    }

    return (
        <div className='w-full h-full'>
            {
                !newGroup && (
                    <div>
                        <div className='flex items-center space-x-10 bg-green-800 text-white pt-16 px-10 pb-5'>
                            <BsArrowLeft className='cursor-pointer text-2xl font-bold'/>
                            <p className='text-xl font-semibold'>Add Group Participants</p>
                        </div>

                        <div className='relative bg-white py-4 px-3'>
                            <div className='flex space-x-2 flex-wrap space-y-1'>
                                {groupMembers.size > 0 && Array.from(groupMembers)
                                    .map((item) => <SelectedMember handleRemoveMember={() => handleRemoveMember(item)}
                                                                   member={item}/>)}
                            </div>

                            <input
                                type='text'
                                onChange={(e) => {
                                    handleSearch(e.target.value)
                                    setQuery(e.target.value)
                                }}
                                className='outline-none border-b border-b-slate-900 p-2 w-[93%]'
                                placeholder='Search User'
                                value={query}
                            />
                        </div>

                        <div className='bg-white overflow-y-scroll h-[50.2vh]'>
                            {query &&
                                auth.searchedUsers.map((item) => <div onClick={() => {
                                    groupMembers.add(item)
                                    setGroupMembers(groupMembers)
                                    setQuery('')
                                }} key={item?.id}
                                >
                                    <hr/>
                                    <ChatCard chatName={item.fullName}
                                              chatImg={item.profilePicture ||
                                                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}/>
                                </div>)}
                        </div>

                        <div className='bottom-10 py-10 bg-slate-200 flex items-center justify-center'>
                            <div className='bg-green-800 rounded-full p-4 cursor-pointer'
                                 onClick={() => {
                                     setNewGroup(true)
                                 }}>
                                <BsArrowRight className='text-white font-bold text-3xl'></BsArrowRight>
                            </div>

                        </div>

                    </div>
                )}

            {newGroup && <NewGroup setShowGroup={setShowGroup} groupMembers={groupMembers}/>}
        </div>
    )
}

export default CreateGroup;