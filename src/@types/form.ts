export type InputProps = {
  name: string;
  label:string;
  error?: any;
}

export type ModalProps ={
  isOpen: boolean;
  onRequestClose: () => void;
}
export type ModalRemoveProps ={
  isOpen: boolean;
  onRequestClose: () => void;
  onRemove: ()=> Promise<void>
}
export type FormData ={
  name: string;
  link: string;
  description: string;
  tag: string;
}