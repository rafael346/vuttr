import { Container, Label,Input } from "./styles";

export function CheckBox(){
  return(
    <Container>
      <Label>
        <Input type='checkbox' />
        Search in tags only
      </Label>
    </Container>
  )
}