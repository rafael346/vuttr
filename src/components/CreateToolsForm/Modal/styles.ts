import styled from "styled-components";
import {MdClose} from 'react-icons/md'

export const Container = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 2rem;
  flex: 1;
` 

export  const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
`
export const Icon = styled(MdClose)`
  color: #8F8A9B;
  font-size: 1.5rem;

`
