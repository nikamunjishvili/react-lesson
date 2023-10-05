import { useEffect, useState } from "react";
import Popup from "./components/popup/Popup";

const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];

function App() {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

  const handleClick = () => {
    setMessages((prev) => [...prev, secondUser]);
  };
  return (
    <div className="App">
      {/* {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />} */}
      {/* <button onClick={() => setShowModal(true)}>open</button> */}
      {/* {showModal && (
       <Popup title="Subscribe to our Website!!" closeIcon="X" setShowModal={setShowModal} >
        <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          reiciendis iusto autem sed culpa.
        </p>
        <input type="text" />
        <button>Join!</button>
      </div>
      </Popup>
     )} */}
      {messages.map((item,index) => {
        return <li key={index}>{item}</li>;
      })}

      <input
        type="text"
        value={secondUser}
        onChange={(e) => setSecondUser(e.target.value)}
      />
      <button onClick={handleClick}>send</button>
    </div>
  );
}

export default App;

// const Modal = ({ showModal, setShowModal }) => {
//   return (
//     <div style={{ width: 200, height: 200, backgroundColor: "red" }}>
//       <button onClick={() => setShowModal(!showModal)}>X</button>
//       <h1>Hello From Modal!!</h1>
//     </div>
//   );
// };
