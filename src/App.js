import { useEffect, useState } from "react";
import Accordion from "./components/_atoms/Accordion";

const data = [
  {
    title: "title_1",
    content: "content_1",
    number: 1,
  },
  {
    title: "title_2",
    content: "content_2",
    number: 2,
  },
  {
    title: "title_3",
    content: "content_3",
    number: 3,
  },
  {
    title: "title_4",
    content: "content_4",
    number: 4,
  },
];

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [text, setText]);

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div>
            <Accordion
              title={item.title}
              content={item.content}
              number={item.number}
            />
          </div>
        );
      })}
      <div>მომხმარებელმა ჩაწერა: {count}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
