import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth } from "../firebase";
import { login } from "../features/userSlice";

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

  > form {
    display: flex;
    flex-direction: column;
    > input {
      width: 350px;
      height: 50px;
      font-size: 20px;
      padding-left: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    > button {
      width: 365px;
      height: 50px;
      font-size: large;
      color: #fff;
      background-color: #0074b1;
      border-radius: 5px;
    }
  }

  .register {
    color: #0177b7;
    cursor: pointer;
  }

  > p {
    margin-top: 20px;
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const loginApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: pic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: pic
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? {""}
        <span className="register" onClick={register}>
          Register Now
        </span>
      </p>
    </LoginContainer>
  );
};

export default Login;
