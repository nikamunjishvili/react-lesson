import { styled } from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout = ({
  children,
  title,
}) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <h1>{title}</h1>
      <Header />
      {children}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default MainLayout;

const FooterContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: end;
`;
