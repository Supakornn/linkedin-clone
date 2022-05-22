import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

// styled components
const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const PostHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const PostInfo = styled.div`
  margin-left: 10px;

  > p {
    font-size: 12px;
    color: gray;
  }

  > h2 {
    font-size: 15px;
  }
`;

const PostBody = styled.div`
  overflow-wrap: anywhere;
`;

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <PostInfo>
          <h2>Supakorn</h2>
          <p>Description</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>Message</p>
      </PostBody>
    </PostContainer>
  );
};

export default Post;
