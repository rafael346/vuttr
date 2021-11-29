import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 10.5rem;
  height: 3.125rem;
  border-radius: 0.25rem;
  border: none;
  background: #0DCB7D;
  color: #ffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`