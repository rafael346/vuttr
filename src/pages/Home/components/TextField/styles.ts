import styled from "styled-components";
import {AiOutlineSearch } from 'react-icons/ai'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 3.2rem;
  background:#F5F4F6;
  border-radius: 5px;
  border: 1px solid #B1ADB9;
`

export const Icon = styled(AiOutlineSearch)`
  color:#8F8A9B;
  margin-right: 0.5rem;
  background: inherit;

`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: inherit;
  border:none;
  
  border-radius: 5px;
  
  &::placeholder{
    color: var(--lighterInk);
  }
  &:focus{
    outline: none;
  }
 
`


