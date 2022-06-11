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

  .left {
    color: #0177b7;
    margin-right: 5px;

    > .MuiSvgIcon-root {
      font-size: 15px;
    }
  }

  .right {
    flex: 1;

    > h4 {
      font-size: 14px;
    }

    > p {
      font-size: 12px;
      color: gray;
    }
  }
`;

const Widgets = () => {
  const newArticle = (headeing, subtitle) => (
    <Article>
      <div className="left">
        <FiberManualRecordIcon />
      </div>

      <div className="right">
        <h4>{headeing}</h4>
        <p>{subtitle}</p>
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
