import {useState} from 'react';
import ChatInput from './componenets/ChatInput';
import ChatMessages from './componenets/ChatMessages';
import './App.css';

function App() {
        const [chatMessage, setChatMessage] = useState([
          {
            message: "Hello Chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can I help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "Please Provide the todays Date",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is February 20",
            sender: "robot",
            id: "id4",
          },
        ]);

        return (
          <div className='app-container'>
  
            <ChatMessages chatMessage={chatMessage} />

            <ChatInput
              chatMessage={chatMessage}
              setChatMessage={setChatMessage}
            />

          </div>
        );
      }
export default App;
