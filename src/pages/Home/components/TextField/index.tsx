import { Container, Input, Icon } from "./styles";


export function TextField({...rest}){
  return(
   <Container >
     <Icon />
     <Input placeholder='Search' {...rest} />
   </Container>
  )
}