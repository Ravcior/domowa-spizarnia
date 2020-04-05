import React from 'react';
import AppContext from '../../context';
import styles from './Card.module.scss';
import iconAdd from './../../assets/Icons/icon-add.png';
import iconSub from './../../assets/Icons/path.png';
import iconRemove from './../../assets/Icons/icon-sign-out.png';
import iconEdit from './../../assets/Icons/icon-edit.png';

const Card = ({ icon, name, state }) => (
   <AppContext.Consumer>
      {(context) => (
         <div value={name} className={styles.card}>
            <div
               className={styles.removeIcon}
               onClick={() => context.removeItem(name)}
            >
               <img src={iconRemove} alt="" />
            </div>
            <div
               className={styles.editIcon}
               onClick={() => context.editName(name)}
            >
               <img src={iconEdit} alt="" />
            </div>

            <div className={styles.img}>
               <img
                  className={styles.productIcon}
                  src={icon}
                  alt=""
               />
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.counter}>
               <button
                  className={styles.substraction}
                  onClick={() => context.substrValue(name)}
               >
                  <img src={iconSub} alt="" />
               </button>
               <div className={styles.state}>{state}</div>
               <button
                  className={styles.addition}
                  onClick={() => context.addValue(name)}
               >
                  <img src={iconAdd} alt="" />
               </button>
            </div>
         </div>
      )}
   </AppContext.Consumer>
);

export default Card;
