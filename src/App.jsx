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
`;

const BodyContainer = styled.div`
  display: flex;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
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
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
