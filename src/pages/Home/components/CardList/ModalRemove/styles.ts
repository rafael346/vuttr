import styled from "styled-components";
import {MdClose} from 'react-icons/md'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Title = styled.h2`


`
export const Article = styled.article`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  font-weight: 800;
  background: inherit;

`

export const Footer = styled.footer `
  display: flex;
  justify-content: flex-end;

  button{
    width: 8rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background: #F95E5A;
    color:#ffff;
    margin-left: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
    filter: brightness(0.9);
  }
  }

  button:first-child{
    background: #E1E7FD;
    color: #365DF0;
  }

  

  


`


export const Icon = styled(MdClose)`
  font-size: 1.4rem;

`