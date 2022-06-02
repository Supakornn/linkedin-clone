import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Feed from "./layouts/Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./layouts/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

// styled-components
const AppContainer = styled.div`
  background-color: #f3f2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
`;

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <AppContainer>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <BodyContainer>
          <Sidebar />
          <Feed />
        </BodyContainer>
      )}
    </AppContainer>
  );
}

export default App;
