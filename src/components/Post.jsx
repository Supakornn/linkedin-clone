import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const PostHeader = styled.div``;
const PostBody = styled.div``;
const PostInfo = styled.div``;

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
