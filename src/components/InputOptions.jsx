import React from "react";
import styled from "styled-components";

const InputOption = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: gray;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: LightGray;
    border-radius: 10px;
  }
`;

const InputOptions = ({ Icon, title, color }) => {
  return (
    <InputOption>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </InputOption>
  );
};

export default InputOptions;
