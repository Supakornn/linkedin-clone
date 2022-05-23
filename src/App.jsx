import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Feed from "./layouts/Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./layouts/Login";
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
