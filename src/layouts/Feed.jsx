import React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "../components/InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

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

const InputOptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <InputContainer>
        <div className="input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <InputOptionsContainer>
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </InputOptionsContainer>
      </InputContainer>
    </FeedContainer>
  );
};

export default Feed;
