import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{

    --white: #FFFFFF;
    --darkestWhite: #EBEAED;

    --ink: #170C3A;
    --lighterInk: #b1adb9;

    --blue: #365DF0;

    --darkerGreen:#0E995D;
    --darkGreen:#10B26C;
    --confirm:##0DCB7D;
    --lightGreen:#88EDC4;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button { 
    cursor: pointer;
    outline: none;
  }
  a{ 
    cursor: pointer;
    outline: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 35.625rem;
    height: 38.5rem;
    background: var(--white);
    padding: 1.5rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
  .react-modal-title{
    font-size: 1.5rem;
  
  }
`