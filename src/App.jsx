import React from "react";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";

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
const Section = styled.div`
  flex: 0.6;
  background-color: red;
`;

const Sec = styled.div`
  flex: 0.2;
  background-color: green;
`;

function App() {
  return (
    <AppContainer>
      {/* Header */}
      <Header />
      {/* Body */}
      <BodyContainer>
        <Sidebar />
        <Section />
        <Sec />
      </BodyContainer>
    </AppContainer>
  );
}

export default App;
