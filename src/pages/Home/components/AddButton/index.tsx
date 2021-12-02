

import { Button, Icon } from "./styles";
type ButtonProps ={
  handleFunction: ()=>void;
}

export function AddButton({handleFunction}:ButtonProps){
  return(
    <Button onClick={handleFunction}>
      <Icon/>
      Add
    </Button>
  )
}