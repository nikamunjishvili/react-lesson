import { useState } from "react";
import SignIn from "./components/layouts/SignIn";
import Todo from "./components/layouts/Todo";
import AccordionApp from "./components/_atoms/AccordionApp";

function App() {
  const [show, setShow] = useState(false);

  // const handleChangeValue = (email,password) => {
  //   console.log({email,password})
  //   setShow(true);
  // }

  return (
    <div className="App">
      {/* {!show && <SignIn handleChangeValue={handleChangeValue} />}

      {show && (
        <div>
          <h1>Hello This is HomePage!!</h1>
        </div>
      )} */}
      {/* <Todo />
      <button onClick={() => setShow(!show)}>Show</button>

      {show ? (
       <div className="darkMode">
        <h1>Hello</h1>
       </div>
      ) : (
        <div className="lightMode">
        <h1>Hello</h1>
       </div>
      )} */}

      <AccordionApp />
    </div>
  );
}

export default App;