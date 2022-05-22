import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import BodyButtons from "../components/BodyButtons";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <ButtonContainer>
        <BodyButtons Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <BodyButtons Icon={ChatIcon} title="Comment" color="gray" />
        <BodyButtons Icon={ShareIcon} title="Share" color="gray" />
        <BodyButtons Icon={SendIcon} title="Send" color="gray" />
      </ButtonContainer>
    </PostContainer>
  );
};

export default Post;
