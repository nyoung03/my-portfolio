import styled from "styled-components";
import htmlIcon from "../icons/html-5.png";
import cssIcon from "../icons/css.png";
import jsIcon from "../icons/js.png";
import tsIcon from "../icons/typescript.png";
import sassIcon from "../icons/sass.png";
import reactIcon from "../icons/react.png";

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto 100px auto;
  background-color: white;
  padding: 15px 20px;
  border-radius: 15px;
`;

const Title = styled.h3`
  font-size: 40px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;

const StackIcons = styled.div`
  height: 300px;
  text-align: center;
  position: relative;
`;

const Icon = styled.img`
  width: 60px;
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  &:hover {
    width: 65px;
  }
`;

function Stack() {
  return (
    <Wrapper id="2">
      <Title>Stack</Title>
      <SubTitle>Front</SubTitle>
      <StackIcons>
        <Icon src={htmlIcon} left="290px" top="10px" />
        <Icon src={cssIcon} right="290px" top="10px" />
        <Icon src={jsIcon} left="240px" top="100px" />
        <Icon src={tsIcon} right="250px" top="100px" />
        <Icon src={reactIcon} left="290px" bottom="40px" />
        <Icon src={sassIcon} right="290px" bottom="40px" />
      </StackIcons>
    </Wrapper>
  );
}

export default Stack;
