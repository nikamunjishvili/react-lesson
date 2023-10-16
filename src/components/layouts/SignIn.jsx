import { useState } from "react";
import Input from "../_atoms/Input";
import Button from "../_atoms/Button";
import { styled } from "styled-components";
import Home from "../../pages/Home";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedin, setIsLogedin] = useState(true);

  const handleChangeValue = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setIsLogedin(false);
    setEmail("");
    setPassword("")
  };

  const emails = localStorage.getItem('email');
  const passwords = localStorage.getItem('password');

  return (
    <>
      {isLogedin ? (
        <Wrapper>
          <LoginContainer>
            <Input
              type="email"
              value={email}
              placeholder="enter you email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ marginTop: 10 }}>
              <Input
                type="password"
                value={password}
                placeholder="enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <ButtonContainer>
              <Button value="signin" onClick={handleChangeValue} />
            </ButtonContainer>
          </LoginContainer>
        </Wrapper>
      ) : (
        <Home setIsLogedin={setIsLogedin} emails={emails} passwords={passwords} />
      )}
    </>
  );
};

export default SignIn;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  width: 300px;
  background-color: #ccc;
  padding: 30px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
