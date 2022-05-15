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
  }
`;

const SidebarStats = styled.div``;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <img
          src="https://images.unsplash.com/photo-1650618319276-f2acb4454e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="banner"
        />
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
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
