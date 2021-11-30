import { Container, Input } from "./styles";
import {AiOutlineSearch as Icon} from 'react-icons/ai'

export function TextField({...rest}){
  return(
   <Container >
     <Icon />
     <Input placeholder='Search' {...rest} />
   </Container>
  )
}