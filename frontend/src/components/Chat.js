import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import "./chat.css"

const Chat = ({socket}) => {
  const [messageList, setMessageList] = useState([])

  const [msgText, setMsgText] = useState("");
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const addMessage = () => {
    const obj = { text : msgText, sent : true, sentAt : new Date(), name : currentUser.username };
    console.log(obj);
    socket.emit('sendmsg', obj );
    setMessageList([...messageList, obj]);
    setMsgText('');
  }

  socket.on('recmsg', (data) => {
    setMessageList([...messageList, data]);
  })

  const displayMessages = () => {
    return messageList.map((msg) => (
      <motion.div
        initial={{ scale: 0.6, x: "800%", opacity: 0 }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={"msg "+(msg.sent? 'sent' : 'rec')}>
        <p>{msg.text}</p>
        <p className="text-white float-end">{msg.name}</p>
      </motion.div>
    ))
  }

  return (
    
      <div className="container">
        <h1 className="text-center">My Chat App</h1>
        <div className="msg-area">{displayMessages()}</div>

        <div className="input-group mt-4">
          <input
            className="form-control"
            value={msgText}
            onChange={(e) => {
              setMsgText(e.target.value)
            }}
          />
          <button className="btn btn-primary" onClick={addMessage}>
            <i className="fas fa-plus-circle"></i> Send
          </button>
        </div>
      </div>
   
  )
}

export default Chat
