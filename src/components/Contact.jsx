import styled from "styled-components";

function Contact() {
  return (
    <Wrapper id="3">
      <Title>Contact Me!</Title>
      <EmailIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
      </EmailIcon>
      <Email>vnfdlvdk37@gmail.com</Email>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  width: 80%;
  height: 700px;
  margin: 100px auto 0 auto;
  background-color: white;
  border-radius: 15px 15px 0 0;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 40px;
  padding: 40px 0;
`;

const EmailIcon = styled.svg`
  width: 50px;
  fill: #003d00;
`;

const Email = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;
