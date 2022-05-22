import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import BodyButtons from "../components/BodyButtons";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../components/Post";
import { db } from "../firebase";

const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 20px;
`;

const InputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  .input {
    border: 1px solid LightGray;
    border-radius: 30px;
    display: flex;
    padding: 10px;
    color: gray;
    padding-left: 15px;

    > form {
      display: flex;
      width: 100%;

      > input {
        border: none;
        flex: 1;
        margin-left: 10px;
        outline-width: 0;
        font-weight: 600;
      }

      > button {
        display: none;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <FeedContainer>
      <InputContainer>
        <div className="input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <ButtonContainer>
          <BodyButtons Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <BodyButtons Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <BodyButtons Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <BodyButtons Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </ButtonContainer>
      </InputContainer>
      {posts.map((post) => (
        <Post />
      ))}
      <Post />
    </FeedContainer>
  );
};

export default Feed;
