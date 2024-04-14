
interface ModalProps {
    children: JSX.Element,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal({ children, onClose, isOpen }: ModalProps){

    return(
        <div className={"modal" + (isOpen ? ' modal--open' : ' ')}>
            <button onClick={() => onClose()} className="modal-close"></button>
            {children}
        </div>
    )
}