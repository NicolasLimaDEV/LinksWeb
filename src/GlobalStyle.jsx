import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
    
    font-family: 'Inter', sans-serif;

    background-color: ${props => props.theme.body};
  }

`