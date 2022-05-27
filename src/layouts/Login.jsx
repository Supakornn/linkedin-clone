import React from "react";
import styled from "styled-components";

// styled-components
const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  > img {
    object-fit: contain;
    height: 150px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
const Login = () => {
  const login = () => {};
  const register = () => {};
  return (
    <LoginContainer>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name (required if registering)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={login}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="register" onClick={register}>
          Register Now
        </span>
      </p>
    </LoginContainer>
  );
};

export default Login;
