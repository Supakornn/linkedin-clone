import React from "react";
import styled from "styled-components";
import HeaderOptions from "./HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";

// Styled Components
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
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
          <input type="text" />
        </div>
      </HeaderLeft>

      {/* Right Header */}
      <HeaderRight>
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={ChatIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions
          avatar="https://cdn.discordapp.com/attachments/922772649816498217/974488709598674974/Sniper_mask_icon.jpg"
          title="me"
        />
      </HeaderRight>
    </HeaderContainer>
  );
};
export default Header;
