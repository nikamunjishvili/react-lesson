import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Ul>
        <Li>
          <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
        </Li>
        <Li>
          <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
        </Li>
        <Li>
          <Link to="/contact" style={{textDecoration: 'none'}}>Contact</Link>
        </Li>
        <Li>
          <Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link>
        </Li>
      </Ul>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #b1adad;
  margin: 0;
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Li = styled.li`
     list-style: none;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }

`