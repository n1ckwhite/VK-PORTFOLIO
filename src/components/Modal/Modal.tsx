import {createPortal} from "react-dom";
import {FC} from "react";
import styleModal from './Modal.module.css';
import cn from 'classnames'
interface IProps {
    isActive: boolean;
    closeModal: () => void;
    image: string
}

const modalRoot = document.getElementById('react-modal') as HTMLDivElement
export const Modal: FC<IProps> = ({isActive,closeModal,image}) => {

    return createPortal(
        <div className={cn(styleModal.modal,isActive ? styleModal.modalActive : '')}>
            <div className={styleModal.overlay} onClick={closeModal}></div>
            {isActive
            ? (
                    <div className={styleModal.div}>
                    <img className={styleModal.img} src={image}/>
                        <button className={styleModal.btn} onClick={closeModal}>&times;</button>
                    </div>
                ) : ''}

        </div>
    ,modalRoot)
}