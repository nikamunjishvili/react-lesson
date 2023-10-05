import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { data } from "../../data/data";

const AccordionApp = () => {
  const [showItem, setShowItem] = useState(0);
  
  return (
    <div>
      {data.map((item) => {
        return (
          <AccordionItem
            onClick={() => setShowItem(1)}
            showItem={showItem}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default AccordionApp;
