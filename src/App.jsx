import React from "react";
// import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
