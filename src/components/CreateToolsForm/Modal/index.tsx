import Modal from 'react-modal';
import { useForm, SubmitHandler } from 'react-hook-form';
import{ yupResolver} from '@hookform/resolvers/yup'
import { ToolsFormSchema } from '../FormValidation';
import { ModalProps, FormData } from "../../../@types/form";
import { InputForm } from "../Input";
import { Container } from "./styles";
import { Button } from "../SubmitButton/styles";
import { api } from '../../../services/api';
import { useData } from '../../../context/DataContext';

export function NewToolModal({ isOpen, onRequestClose } : ModalProps ){
  const {reload, setReload} = useData();
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(ToolsFormSchema)});
  const { errors} = formState
  const handleCreateTool:SubmitHandler<FormData> = async (values)=>{
    const formattedTags = values.tag.split(" ");

    const data = {
      id: Math.random(),
      title: values.name,
      link: values.link,
      description: values.description,
      tags: formattedTags
    }

   const response = await api.post('tools', data);
    if(response.status === 201){
      setReload(!reload);
      onRequestClose();
    }
   console.log("response::",response);
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
    >
      X
    </button>
    <h2 className="react-modal-title"> + Add new Tool</h2>
    <Container onSubmit={handleSubmit(handleCreateTool)}>
      <InputForm  label='Tool Name' {...register('name')} error={errors.name} />
      <InputForm label='Tool Link'  {...register('link')}  error={errors.link} />
      <InputForm  label='Tool Desription'  {...register('description')} error={errors.description} />
      <InputForm label='Tags' {...register('tag')}  error={errors.tag} />
      <Button type='submit'>
        Add tool
      </Button>
    </Container>
    </Modal>
  )
}