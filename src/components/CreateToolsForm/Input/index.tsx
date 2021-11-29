import { forwardRef, ForwardRefRenderFunction } from "react";

import { Input, Label, ErrorMessage, Container } from "./styles";
import { InputProps } from "../../../@types/form";



const FormInput:ForwardRefRenderFunction<HTMLInputElement, InputProps>  = ({label, name, error, ...rest}, ref) =>{
  return(
    <Container>
      <Label>
        {label}
      </Label>
      <Input id={name} name={name} {...rest}  ref={ref} />
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </Container>
  )
}

export  const InputForm = forwardRef(FormInput);