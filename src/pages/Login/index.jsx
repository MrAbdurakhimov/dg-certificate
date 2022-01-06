import styled from "styled-components";
import { mainBg } from "../../assets/";
import Form from "../../components/Form/";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  padding: 64px 24px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  &:nth-child(2) {
    background: url(${mainBg});
    padding: 0;
  }
`;
const Overlay = styled.div`
  background: rgba(0, 68, 255, 0.2);
  flex: 1;
`;

const Text = styled.div`
  /* flex: 1; */
  font-family: "Sora", sans-serif;
  font-size: 32px;
`;
const Desc = styled.div`
  flex: 1;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  padding: 20px 0;
`;

const Login = () => {
  return (
    <Container>
      <Section>
        <Text>Login</Text>
        <Desc>
          Iltimos sertifikatingizni olish uchun email manzilingizni kiriting.
          <Form />
        </Desc>
      </Section>
      <Section>
        <Overlay></Overlay>
      </Section>
    </Container>
  );
};

export default Login;
