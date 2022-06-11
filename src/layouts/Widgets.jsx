import React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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

const Article = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
  }
`;

const Widgets = () => {
  const newArticle = (headeing, subtitle) => (
    <Article>
      <div className="left">
        <FiberManualRecordIcon />
      </div>

      <div className="right">
        {headeing}
        {subtitle}
      </div>
    </Article>
  );
  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </WidgetsHeader>
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newArticle("New Article", "Lorem ipsum dolor sit amet")}
    </WidgetsContainer>
  );
};

export default Widgets;
