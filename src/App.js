import { useEffect, useState } from "react";

function App() {
  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="App">
    {showModal && <Modal setShowModal={setShowModal} showModal={showModal}/>}
    </div>
  );
}

export default App;

const Modal = ({showModal,setShowModal}) => {
  return (
    <div style={{width: 200, height: 200, backgroundColor: 'red'}}>
      <button onClick={() => setShowModal(!showModal)}>X</button>
      <h1>Hello From Modal!!</h1>
    </div>
  )
}
