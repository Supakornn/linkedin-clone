import React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";

const WidgetsContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 10px;
`;

const WidgetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  > h2 {
    font-size: 16px;
    font-weight: 400;
  }
`;

const Widgets = () => {
  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </WidgetsHeader>
    </WidgetsContainer>
  );
};

export default Widgets;
