import styled from "styled-components";
import { data } from "../api";

function ProjectList() {
  return (
    <Wrapper id="3">
      <Title>Project</Title>
      {data.map((i) => (
        <Box key={i.id}>
          <Photo src={require(`../images/${i.photo}`)} />
          <Col>
            <ProjectTitle>{i.title}</ProjectTitle>
            <Stack>
              <div>사용 기술 :</div>
              {i.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </Stack>
            <Text>주요 기능 : {i.explanation}</Text>
            {i.notion !== "" ? (
              <Pages>
                <li>
                  <a href={`${i.hompage}`} target="_blank" rel="noreferrer">
                    view
                  </a>
                </li>
                <li>
                  <a href={`${i.notion}`} target="_blank" rel="noreferrer">
                    notion
                  </a>
                </li>
                <li>
                  <a href={`${i.github}`} target="_blank" rel="noreferrer">
                    github
                  </a>
                </li>
              </Pages>
            ) : (
              <Pages>
                <li>
                  <a href={`${i.hompage}`} target="_blank" rel="noreferrer">
                    view
                  </a>
                </li>
                <li>
                  <a href={`${i.github}`} target="_blank" rel="noreferrer">
                    github
                  </a>
                </li>
              </Pages>
            )}
          </Col>
        </Box>
      ))}
    </Wrapper>
  );
}

export default ProjectList;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 40px;
  padding-top: 15px;
`;

const Box = styled.div`
  background-color: #81c784;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  font-size: 20px;
  margin: 50px 0;

  &:hover {
    background-color: #519657;
  }
`;

const Photo = styled.img`
  @media (max-width: 1192px) {
    display: none;
  }
  height: 250px;
  width: 40%;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const Col = styled.div`
  @media (max-width: 1192px) {
    width: 100%;
  }
  @media (max-width: 671px) {
    width: 100%;
    padding: 30px 0;
    font-size: 13px;
  }
  width: 50%;
  padding: 30px;
  margin: 0 auto;
`;

const ProjectTitle = styled.div`
  font-size: 30px;
  padding: 10px 0;
`;

const Stack = styled.ul`
  display: flex;
  padding: 5px 0;

  li {
    padding: 0 5px;
  }
`;

const Text = styled.div`
  padding: 5px 0;
`;

const Pages = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding-top: 40px;

  li {
    padding: 0 10px;
  }
`;
