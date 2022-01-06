import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Section = styled.div`
  flex: 1;
  &:nth-child(2) {
    background-color: #cc7878;
  }
`;

const Login = () => {
  return (
    <Container>
      <Section>Login</Section>
      <Section>Image</Section>
    </Container>
  );
};

export default Login;
