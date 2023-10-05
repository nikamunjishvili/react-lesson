import React, { useState } from "react";

const Accordion = ({ title, content, number }) => {
  const [show, setShow] = useState(0);
  return (
    <div>
      <p onClick={() => setShow(number)}>{title}</p>
      {show === number && <p>{content}</p>}
    </div>
  );
};

export default Accordion;
