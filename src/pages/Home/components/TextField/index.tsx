import { Container, Input } from "./styles";
import {AiOutlineSearch as Icon} from 'react-icons/ai'

export function TextField(){
  return(
   <Container >
     <Icon />
     <Input placeholder='Search' />
   </Container>
  )
}