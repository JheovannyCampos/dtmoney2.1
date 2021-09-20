import Modal from "react-modal";
//import { Container } from "./styles";

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({isOpen, onRequestClose}: NewTransactionsModalProps){
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            >
                <h2>Cadastrar Transação</h2>
      </Modal>
    )
}