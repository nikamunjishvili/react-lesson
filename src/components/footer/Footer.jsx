import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h1 style={{ color: "white" }}>This is Footer!!</h1>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
`;
