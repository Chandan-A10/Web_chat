import React, { useEffect, useState } from 'react'
import ChatRoomCmp from '../components/ChatRoom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUser } from '../Database/GetAllUser'

const ChatRoom=()=> {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  const [userdata, setuserdata] = useState(null)

  useEffect(()=>{
    const details=getAllUser()
    details.then((res)=>{
      setuserdata(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  if(user===''){
    navigate('/')
    return
  }

  return (
    <ChatRoomCmp data={userdata}/>
  )
}

export default ChatRoom