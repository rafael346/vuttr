import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 3.2rem;
  background: var(--darkestWhite);
  border-radius: 5px;

`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: var(--darkestWhite);
  border: none;
  border-radius: 5px;
  
  &::placeholder{
    color: var(--lighterInk);
  }
  &:focus{
    outline: none;
  }
 
`


