import Modal from 'react-modal';
import { ModalRemoveProps } from '../../../../../@types/form';
import { Header,Label,Title,Icon,Article,Footer } from './styles';

export function ModalRemove({onRequestClose, isOpen, onRemove}:ModalRemoveProps){

  function handleRemove(){
    onRemove();
    onRequestClose();
  }
  return(
  <Modal
  isOpen={isOpen}
  onRequestClose={onRequestClose}
  overlayClassName="react-modal-overlay"
  className="react-modal-content"
  >
    <Header>
      <Icon/>
      <Title>Remove Tool</Title>
    </Header>
    <Article>
    <Label>Are you sure you want to remove ?</Label>
    </Article>
    <Footer>
      <button
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        Cancel
      </button>
      <button onClick={handleRemove}>Yes, remove</button>
    </Footer>
</Modal>
)
}