import React from "react";
import styled from "styled-components";

const Button = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: gray;
    padding: 10px;
    cursor: pointer;

    :hover {
        background-color: whitesmoke;
        border-radius: 10px;
    }

    > h4 {
        margin-left: 5px;
    }
`;

const BodyButtons = ({ Icon, title, color }) => {
    return (
        <Button>
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </Button>
    );
};

export default BodyButtons;
