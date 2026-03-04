import {useRef,useEffect} from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessages.css';

function ChatMessages({ chatMessage }) {

        const chatMessageRef=useRef(null);
        useEffect(()=>
      {
        const containerEle=chatMessageRef.current;

        if(containerEle)
      {
        containerEle.scrollTop=containerEle.scrollHeight;
      }
        console.log("Updated");
      },[chatMessage]);
        return (
          <div class='chat-message-container' ref={chatMessageRef}>
            {chatMessage.map((chatmessage) => {
              return (
                <ChatMessage
                  message={chatmessage.message}
                  sender={chatmessage.sender}
                  key={chatmessage.id}
                />
              );
            })}
          </div>
        );
      }

export default ChatMessages;