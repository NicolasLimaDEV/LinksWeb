import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    background-color: ${props => props.theme.body};
  }

`