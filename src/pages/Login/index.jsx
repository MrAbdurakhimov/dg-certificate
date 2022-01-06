import styled from "styled-components";
import { mainBg } from "../../assets/";
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  padding: 64px 24px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  &:nth-child(2) {
    background: url(${mainBg});
  }
`;

const Text = styled.div`
  flex: 1;
  font-family: "Sora", sans-serif;
  font-size: 32px;
`;
const Desc = styled.div`
  flex: 1;
  font-family: "Inter", sans-serif;
  font-size: 16px;
`;

const Login = () => {
  return (
    <Container>
      <Section>
        <Text>Login</Text>
        <Desc>Please provide your login details to get your certificate.</Desc>
      </Section>
      <Section></Section>
    </Container>
  );
};

export default Login;
