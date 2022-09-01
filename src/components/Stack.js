import styled from "styled-components";
import htmlIcon from "../icons/html-5.png";
import cssIcon from "../icons/css.png";
import jsIcon from "../icons/js.png";
import tsIcon from "../icons/typescript.png";
import sassIcon from "../icons/sass.png";
import reactIcon from "../icons/react.png";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto 100px auto;
  background-color: white;
  padding: 15px 20px;
  border-radius: 15px;
`;

const Title = styled.h3`
  font-size: 40px;
`;

const Contain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StackIcons = styled.div`
  /* background-color: red; */
  height: 300px;
  text-align: center;
  position: relative;
`;

const Icon = styled.img`
  width: 60px;
  /* background-color: rebeccapurple; */
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  &:hover {
    width: 65px;
  }
`;

const Text = styled.ul``;

function Stack() {
  return (
    <Wrapper id="2">
      <Title>Stack</Title>
      <Contain>
        <StackIcons>
          <Icon src={htmlIcon} left="200px" top="10px" />
          <Icon src={cssIcon} top="10px" />
          <Icon src={jsIcon} left="140px" top="100px" />
          <Icon src={tsIcon} right="185px" top="100px" />
          <Icon src={reactIcon} left="200px" bottom="50px" />
          <Icon src={sassIcon} bottom="50px" />
        </StackIcons>
        <Text>
          <li>hihiih</li>
          <li>hihiih</li>
          <li>hihiih</li>
          <li>hihiih</li>
          <li>hihiih</li>
          <li>hihiih</li>
          <li>hihiih</li>
        </Text>
      </Contain>
    </Wrapper>
  );
}

export default Stack;
