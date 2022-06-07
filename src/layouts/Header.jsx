import React from "react";
import styled from "styled-components";
import HeaderButtons from "../components/HeaderButtons";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
// Styled Components
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  display: flex;

  > img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }

  .header__search {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    color: gray;
    background-color: #eef3f8;

    > input {
      outline: none;
      border: none;
      background: none;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
`;

const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <HeaderContainer>
      {/* Left Header */}
      <HeaderLeft>
        <img
          src="https://cdn.discordapp.com/attachments/922772649816498217/974470021654909008/unknown.png"
          alt="linkedin icons"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </HeaderLeft>

      {/* Right Header */}
      <HeaderRight>
        <HeaderButtons title="Home" Icon={HomeIcon} />
        <HeaderButtons title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderButtons title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderButtons title="Messaging" Icon={ChatIcon} />
        <HeaderButtons title="Notifications" Icon={NotificationsIcon} />
        <HeaderButtons title="me" onClick={logoutApp} avatar={true} />
      </HeaderRight>
    </HeaderContainer>
  );
};
export default Header;
