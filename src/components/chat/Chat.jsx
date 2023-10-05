import styles from "./chat.module.css";
import Button from "../_atoms/Button";
import Input from "../_atoms/Input";
import Send from "../Icons/send";

const Chat = ({
  firstUser,
  setFirstUser,
  setMessages,
  messages,
  setSecondUser,
  secondUser,
}) => {
  return (
    <div>
      <div className={styles.chat_container}>
        {messages.map((item) => {
          return (
            <div>
              <strong>{item.user}</strong>:{item.message}
            </div>
          );
        })}
      </div>
      <div>
        <Input
          type="text"
          value={firstUser}
          onChange={(e) => setFirstUser(e.target.value)}
          placeholder="first user!!"
        />

        <Button
          value={<Send width={10} height={10} color="red" />}
          onClick={() => {
            setMessages([...messages, { user: "User_1", message: firstUser }]);
          }}
        />
        <Input
          type="text"
          value={secondUser}
          onChange={(e) => setSecondUser(e.target.value)}
          placeholder="second user!!"
        />
        <Button
           value={<Send width={10} height={10} color="blue" />}
          onClick={() => {
            setMessages([...messages, { user: "User_2", message: secondUser }]);
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
