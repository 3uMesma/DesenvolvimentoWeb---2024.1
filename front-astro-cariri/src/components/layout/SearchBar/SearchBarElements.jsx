import { colors } from "../../styles/colors";
import styled from "styled-components";

export const Input = styled.input`
font-family: Inter, sans-serif;
font-size: 1em;
line-height: 1.5em;
box-sizing: border-box;
padding: 10px 10px;
margin: 120px auto 0 ;
width: calc(100% - (2 * 64px));
border: none;
border-bottom: 1px solid black;
font-weight: 500;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.primary};

&:focus {
    border-bottom: 1px solid #E71D36;
}
`;

export const Subtitle = styled.h3`
color: ${colors.textBlack};
`;
