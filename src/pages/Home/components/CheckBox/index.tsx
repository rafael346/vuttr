import { Container, Label,Input } from "./styles";

export function CheckBox({...rest}){
  return(
    <Container>
      <Label>
        <Input type='checkbox' {...rest}/>
        Search in tags only
      </Label>
    </Container>
  )
}