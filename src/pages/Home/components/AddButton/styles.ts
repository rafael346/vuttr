
import styled from "styled-components";
import {BsPlusLg } from 'react-icons/bs'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width:  11rem;
  height: 3rem;
  padding: 0 .5rem;
  background: #365DF0;
  color: #ffff;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s;

  &:hover{
    background:#2F55CC;
  }

`
export const Icon = styled(BsPlusLg)`
  margin-right: 0.5rem;
  background: inherit;
  font-size: 1rem;
`
