import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  font-size:  1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: var(--darkestWhite);
  border: none;
  border-radius: 5px;
  padding-left: 0.5rem;
  
  &::placeholder{
    color: var(--lighterInk);
  }
  &:focus{
    outline: none;
  }
 
`;

export const ErrorMessage = styled.label`
  font-size:  0.75rem;
  font-weight: 600;
  color: #CC4C4C;
`;
