import styles from "./popup.module.css";

const Popup = ({title,closeIcon,children,setShowModal}) => {
  return (
    <div style={container}>
      <div className={styles.popup}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <button onClick={() => setShowModal(false)}>{closeIcon}</button>
      </div>
      {children}
      </div>
    </div>
  );
};

export default Popup;

const container = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
