import React from "react";
import styled from "styled-compónents";

const SwitchWrapper = styled.label``;

const HiddenCheckBox = styled.input.attrs({type="checkbox"})`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    heigth: 0;
`;

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    rigth: 0;
    bottom: 0;
    background-color: ${({isOn}) => (isOn ? "green" : "gray")}; 
    border-radius: ${({isOn}) => size ==="small" ? "10px" : size ==="medium"? "15px" : "20px"};
    transition: background-color 0.2s;
    transition: transform 0.2s;
    &:before{
        content: "";
        position: absolute;
        heigth: ${({size}) => size ==="small" ? "16px" : size==="medium"? "26px" : "36px"};
        width: ${({size}) => size ==="small" ? "16px" : size==="medium"? "26px" : "36px"};
    }

`;

const ToggleSwicth = ({isOn, ontoggle, size="medium"}) => {

};

export default ToggleSwicth;