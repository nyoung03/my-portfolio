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
  padding: 25px 30px;
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
  text-align: center;
`;

const Icon = styled.img`
  width: 60px;
  padding: 10px;

  &:hover {
    width: 55px;
  }

  @media (max-width: 978px) {
    width: 40px;

    &:hover {
      width: 36px;
    }
  }
`;

function Stack() {
  return (
    <Wrapper id="2">
      <Title>Stack</Title>
      <SubTitle>Front</SubTitle>
      <StackIcons>
        <Icon src={htmlIcon} />
        <Icon src={cssIcon} />
        <Icon src={jsIcon} />
        <Icon src={tsIcon} />
        <Icon src={reactIcon} />
        <Icon src={sassIcon} />
      </StackIcons>
    </Wrapper>
  );
}

export default Stack;
