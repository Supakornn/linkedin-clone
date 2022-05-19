import React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";

const FeedContainer = styled.div``;

const InputContainer = styled.div``;
const Feed = () => {
  return (
    <FeedContainer>
      <InputContainer>
        <div className="input">
          <CreateIcon />
        </div>
      </InputContainer>
    </FeedContainer>
  );
};

export default Feed;
