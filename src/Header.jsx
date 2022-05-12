import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
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

function Header() {
  return (
    <HeaderContainer>
      {/* Left Header */}
      <HeaderLeft>
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1652375063~hmac=082972e7cf4fa29fd87f5dc72b69102d"
          alt="linkedin icons"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </HeaderLeft>

      {/* Right Header */}
      <div className="header__right"></div>
    </HeaderContainer>
  );
}

export default Header;
