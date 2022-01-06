import styled from "styled-components";
import { mainBg, logo } from "../../assets/";
import Form from "../../components/Form/";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1 420px;
  display: flex;
  height: 100vh;
  padding: 24px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  &:nth-child(2) {
    flex: 9;
    background: url(${mainBg});
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const Overlay = styled.div`
  background: rgba(76, 0, 130, 0.1);
  flex: 1;
`;

const Logo = styled.img`
  width: 220px;
`;

const Text = styled.div`
  text-align: left;
  flex: 1;
  font-family: "Sora", sans-serif;
  font-size: 32px;
`;
const Desc = styled.div`
  flex: 11;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  padding: 20px 0;
`;

const Login = () => {
  return (
    <Container>
      <Section>
        <Logo src={logo} />
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
