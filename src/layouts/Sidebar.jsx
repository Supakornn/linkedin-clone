import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

// styled-components
const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid LightGray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;

  .sidebar__avatar {
    margin-bottom: 10px;
  }

  > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  > h4 {
    color: gray;
    font-size: 12px;
  }

  > h2 {
    font-size: 18px;
  }
`;

const SidebarStats = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid LightGray;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .sidebar__stat {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .sidebar__stat > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
  }

  .sidebar__statNumber {
    font-weight: bold;
    color: #0a66c2 !important;
  }
`;

const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid LightGray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <img src="https://wallpaperaccess.com/full/2637581.jpg" alt="banner" />
        <Avatar className="sidebar__avatar" />
        <h2>Supakorn Ieamgomol</h2>
        <h4>supakorn.i@proton.me</h4>
      </SidebarTop>
      <SidebarStats>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,551</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,551</p>
        </div>
      </SidebarStats>
      <SidebarBottom>
        <p>Recent</p>
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
