import styled from "@emotion/styled";
import { PiGoogleLogo } from "react-icons/pi";

import TopNavbar from "../../components/TopNavbar";
import login from "../../utils/login";

const Login = () => {
  return (
    <>
      <TopNavbar />
      <Container>
        <h1>Welcome to Life tracker</h1>
        <p>
          The most advanced sleep tracking and optimization app. Log in with
          Google to get started.
        </p>
        <StyledButton onClick={login}>
          <PiGoogleLogo size={20} />
          <span>Log in with Google</span>
        </StyledButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  all: unset;
  background-color: #242447;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;

  & span {
    margin-left: 8px;
    font-weight: 500;
  }
`;

export default Login;
