import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Contain = styled.div`
  text-align: center;
  padding: 10px 15px;
`;

const SourceBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const SourceList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    width: 350px;
  }
`;

function Source() {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick((prev) => !prev);
    console.log(click);
  };
  return (
    <Wrapper>
      <Contain onClick={onClick}>
        {click === false ? (
          <SourceBtn>출처</SourceBtn>
        ) : (
          <SourceList>
            <a
              href="https://www.flaticon.com/free-icons/html"
              title="html icons"
            >
              Html icons created by Pixel perfect - Flaticon
            </a>
            <a href="https://www.flaticon.com/free-icons/css" title="css icons">
              Css icons created by Pixel perfect - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/javascript"
              title="javascript icons"
            >
              Javascript icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/typescript"
              title="typescript icons"
            >
              Typescript icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/sass"
              title="sass icons"
            >
              Sass icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/react"
              title="react icons"
            >
              React icons created by Kiranshastry - Flaticon
            </a>
            <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘">
              아이콘 제작자: Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/kr/free-icons/"
              title="주자 아이콘"
            >
              주자 아이콘 제작자: Freepik - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/kr/free-icons/"
              title="나무 아이콘"
            >
              나무 아이콘 제작자: Vectors Market - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/kr/free-icons/"
              title="구름 아이콘"
            >
              구름 아이콘 제작자: Pixel perfect - Flaticon
            </a>
            <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘">
              아이콘 제작자: Pixel perfect - Flaticon
            </a>
          </SourceList>
        )}
      </Contain>
    </Wrapper>
  );
}
export default Source;
