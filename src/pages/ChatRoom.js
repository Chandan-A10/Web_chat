import React, { useEffect, useState } from 'react'
import ChatRoomCmp from '../components/ChatRoom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../Database/GetAllUser'

const ChatRoom=React.memo(()=> {
  console.log('Chatroom')
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    const onSnapshotCallback = (newdata) => {
      setuserdata(newdata);
    };
  
    const unsubscribe = getAllUser(onSnapshotCallback);
  
    return () => {
      unsubscribe();
    };
  }, []);

  if(user===''){
    navigate('/')
    return
  }

  return (
    <ChatRoomCmp data={userdata}/>
  )
})

export default ChatRoom