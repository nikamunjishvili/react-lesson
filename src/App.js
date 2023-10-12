import { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Send from "./components/Icons/send";
import OvalImage from './assets/Oval.png';

import {
  Button,
  Wrapper,
  Header,
  Ul,
  Li,
  CloseIconWrapper,
} from "./components/styles/AppStyled";
import Home from "./pages/Home";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      {/* <BodyStyles OvalImage={OvalImage} />
      <Header>
        {show && (
          <Ul>
            <Li>Home</Li>
            <Li>Contact</Li>
            <Li>About</Li>
            <Li>Profile</Li>
          </Ul>
        )}
        <CloseIconWrapper>
          <Button saxeli onClick={() => setShow(!show)}>
            {!show ? "open" : "close"}
          </Button>
        </CloseIconWrapper>
      </Header>
      <NewButton>click</NewButton>
      <Send width={300} height={100} color='red'/>
      <Image src={OvalImage} /> */}
      <Home />
    </Wrapper>
  );
}

export default App;

const BodyStyles = createGlobalStyle`
body{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${(props) => props.OvalImage});
  background-repeat: no-repeat;
  background-size: 100%;
}
`;

const NewButton = styled(Button)`
  color: gold;
  background-color: darkred;
`;

const Image = styled.img`

`