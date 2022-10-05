import styled, { keyframes } from "styled-components";
import running from "../icons/running.png";
import tree1 from "../icons/tree1.png";
import tree2 from "../icons/tree2.png";
import tree3 from "../icons/tree3.png";
import tree4 from "../icons/tree4.png";
import tree5 from "../icons/tree5.png";
import cloud1 from "../icons/cloud.png";
import cloud2 from "../icons/cloud2.png";

function Profile() {
  console.log(window.innerWidth);
  return (
    <Wrapper id="1">
      <Text>
        <div>"매일의 성장을 꿈꾸는</div>
        <div>신입 프론트엔드 개발자</div>
        <div>지은영입니다."</div>
      </Text>
      <Paint>
        <Mountain />
        <SmallMountain />
        <Tree src={tree5} top="430px" left="-30px" />
        <Tree src={tree1} top="420px" left="50px" />
        <Tree src={tree3} top="420px" right="110px" />
        <Tree src={tree2} top="415px" right="50px" />
        <Tree src={tree4} top="415px" left="300px" />
        <Cloud src={cloud1} top="130px" left="120px" />
        <Cloud src={cloud2} top="180px" right="120px" />
        <Woman src={running} />
      </Paint>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 2fr;

  @media (max-width: 978px) {
    display: flex;
    flex-direction: column;
  }
`;

const Text = styled.div`
  text-align: center;
  height: 20%;
  margin: auto;

  div {
    font-size: 40px;
    padding: 5px 0;
  }
`;

const Paint = styled.div`
  position: relative;

  @media (max-width: 978px) {
    position: static;
  }
`;

const Mountain = styled.div`
  width: 0;
  height: 0;
  border-bottom: 300px solid #524c00;
  border-left: 100px solid transparent;
  border-right: 300px solid transparent;
  margin-top: 200px;

  @media (max-width: 978px) {
    display: none;
  }
`;

const SmallMountain = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 230px solid #255d00;
  border-left: 180px solid transparent;
  border-right: 180px solid transparent;
  position: absolute;
  top: 280px;
  left: 130px;

  @media (max-width: 978px) {
    display: none;
  }
`;

const Tree = styled.img`
  width: 100px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  @media (max-width: 978px) {
    display: none;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-6px)
  }
  100% {
    transform: translateY(0)
  }
`;

const Cloud = styled.img`
  position: absolute;
  width: 150px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  animation: ${bounce} 3s linear 0s infinite alternate;
`;

const run = keyframes`
  from {
    right: 0px;
  }
  to {
    right: 1500px;
  }
`;

const Woman = styled.img`
  transform: rotateY(180deg);
  animation: ${run} 10s linear infinite;
  position: absolute;
  width: 60px;
  right: 0px;

  @media (max-width: 978px) {
    display: none;
  }
`;
