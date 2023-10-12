import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Li = styled.li`
  background-color: blue;
  &:hover {
    background-color: #28a745;
    text-decoration: underline;
  }
`;

export const CloseIconWrapper = styled.div`
  text-align: end;
  width: 100%;
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  font-size: 8px;
  background-color: ${(props) => (props.saxeli ? "red" : "green")};
  color: ${(props) => (props.saxeli ? "green" : "red")};
`;
