import MainLayout from "../components/layouts/MainLayout";

const Home = ({ setIsLogedin,emails,passwords }) => {
  return (
    <MainLayout title="home page!!">
      <h1>Home Page!!</h1>
      <h1>Your email: {emails}</h1>
      <h1>Your Password: {passwords}</h1>
      <button onClick={() => setIsLogedin(true)}>logout</button>
    </MainLayout>
  );
};

export default Home;
