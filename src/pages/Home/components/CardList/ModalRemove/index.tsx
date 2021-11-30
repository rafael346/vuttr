import Modal from 'react-modal';
import { ModalRemoveProps } from '../../../../../@types/form';



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
  <button
    type="button" 
    onClick={onRequestClose} 
    className="react-modal-close"
  >
    Cancel
  </button>
  <button onClick={handleRemove}>Remove</button>

</Modal>
)
}