import React from 'react';
import styles from './ModalWrapper.module.scss';
import GreenTitle from '../Title/GreenTitle';
import CloseIcon from '../../assets/Icons/icon-sign-out.png';

const ModalWrapper = ({ children, context, ...props }) => (
   <div className={styles.wrapper}>
      <div
         className={styles.closeModal}
         onClick={() => context.closeAddForm()}
      ></div>
      <div className={styles.modal}>
         <div
            className={styles.closingBtn}
            onClick={() => context.closeAddForm()}
         >
            <img src={CloseIcon} alt="" />
         </div>
         <GreenTitle>{props.title}</GreenTitle>
         {children}
      </div>
   </div>
);

export default ModalWrapper;
