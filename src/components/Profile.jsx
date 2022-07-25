import styled from "styled-components";
import { profileData } from "../api";
import me from "../img/na.jpg";
import cloud from "../img/cloud.jpg";
import waves from "../img/waves.jpg";

function Profile() {
  return (
    <Wrapper>
      <Text>
        <div>{profileData.motto}</div>
        <div>지은영입니다.</div>
        <Stack>
          <div>Stack</div>
          {profileData.stack.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </Stack>
      </Text>
      <Photo>
        <img src={me} alt="me" />
        <img src={cloud} alt="cloud" />
        <img src={waves} alt="waves" />
      </Photo>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.div`
  width: 40%;
  text-align: center;

  div {
    font-size: 40px;
    padding: 5px 0;
  }
`;

const Stack = styled.ul`
  margin-top: 50px;

  div {
    font-size: 25px;
    text-decoration: underline;
    padding: 10px 0;
  }

  li {
    padding: 5px;
  }
`;

const Photo = styled.div`
  position: relative;

  img {
    height: 200px;
    border-radius: 50%;
    position: absolute;

    &:first-child {
      height: 350px;
      top: -230px;
      left: -300px;
      z-index: 9;
      animation: circle 2.5s ease-in-out infinite;
    }

    &:nth-child(2) {
      bottom: -70px;
      animation: circle 3s ease-in-out infinite;
    }

    &:last-child {
      left: -150px;
      top: 70px;
      animation: circle 2s ease-in-out infinite;
    }
  }
  @keyframes circle {
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2%);
    }
  }
`;
