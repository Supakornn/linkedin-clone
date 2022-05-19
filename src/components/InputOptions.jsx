import React from "react";
import styled from "styled-components";

const InputOption = styled.div``;

const InputOptions = ({ Icon, title, color }) => {
  return (
    <InputOption>
      <Icon style={{ color: color }} />
      <h4>Title</h4>
    </InputOption>
  );
};

export default InputOptions;
