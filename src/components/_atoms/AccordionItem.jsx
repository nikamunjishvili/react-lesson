
const AccordionItem = ({onClick, title,content,showItem}) => {
  return (
    <>
      <p onClick={onClick}>{title}</p>
      {showItem === 1 && (
        <p>
          {content}
        </p>
      )}
    </>
  );
};

export default AccordionItem;
