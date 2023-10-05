import Chat from "../chat/Chat";
import {useState} from 'react';

const ChatLayout = () => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <Chat
      firstUser={firstUser}
      setFirstUser={setFirstUser}
      secondUser={secondUser}
      setSecondUser={setSecondUser}
      messages={messages}
      setMessages={setMessages}
    />
  );
};

export default ChatLayout;
