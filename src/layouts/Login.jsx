import React from "react";
import styled from "styled-components";

// styled-components
const LoginContainer = styled.div`
  img {
    width: 500px;
  }
`;
const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />
      <form>
        <input type="text" />
      </form>
    </LoginContainer>
  );
};

export default Login;
