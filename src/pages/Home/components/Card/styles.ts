import styled from "styled-components";
import {MdClose} from 'react-icons/md'

type ButtonProps ={
  selected?: boolean;
}
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;
  padding: 0.5rem;
  box-shadow: 0px 10px 10px #0000000D;
  border-radius: 5px;
  border: 1px solid #EBEAED;

`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Title = styled.a`
  font-size: 1.25rem;
  font-weight: 800;
  color: #365DF0;
  text-decoration: none;
  margin-bottom:  0.5rem;
`

export const Content = styled.article`
  p{
    text-align: justify;
    margin-bottom: 0.25rem;
    padding-right: 0.75rem;
  }
  
`

export const Footer = styled.footer`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const Tag = styled.strong<ButtonProps>`
  font-weight: 900;
  background: ${props => props.selected ? '#e2e' : null}
`

export  const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  padding: 0.125rem;
  font-weight: 900;
  font-size: 1rem;
  color: #CC4C4C;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

`
export const Icon = styled(MdClose)`
  color: #CC4C4C;
  font-size: 1rem;

`
