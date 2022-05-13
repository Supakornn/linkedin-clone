import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
// styled Components
const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;

  .HeaderOption__title {
    font-size: 12px;
    font-weight: 400;
  }

  cursor: pointer;
  :hover {
    color: black;
  }

  .HeaderOption__icon {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
  }
`;

const HeaderOptions = ({ avatar, title, Icon }) => {
  return (
    <HeaderOption>
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar && <Avatar className="HeaderOption__icon" src={avatar} />}
      <h3 className="HeaderOption__title">{title}</h3>
    </HeaderOption>
  );
};

export default HeaderOptions;
