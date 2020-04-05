import React from 'react';
import AppContext from '../../context';
import styles from './Settings.module.scss';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import deleteIcon from '../../assets/Icons/icon-sign-out.png';

const Settings = () => (
   <AppContext.Consumer>
      {(context) => (
         <Container>
            <Title>Settings</Title>
            <div className={styles.listBox}>
               <div className={styles.nameTitle}>
                  <span className={styles.text}>
                     Minimal amount
                  </span>
                  <div className={styles.input}>
                     <input
                        placeholder={context.minAmount}
                        type="number"
                        min="0"
                        name="amount"
                        id="amount"
                        onChange={context.changeMinAmount}
                     />
                  </div>
               </div>
               <div className={styles.nameTitle}>
                  Your Categories:
               </div>
               {context.categories.map((item) => (
                  <div key={item} className={styles.row}>
                     <div className={styles.name}>
                        {item}
                     </div>
                     <div
                        className={styles.deleteIcon}
                        onClick={() =>
                           context.deleteCategory(item)
                        }
                     >
                        <img src={deleteIcon} alt="" />
                     </div>
                  </div>
               ))}
               <div
                  className={styles.btnRow}
                  onClick={context.addNewCategory}
               >
                  <div className={styles.addCategoryBtn}>
                     Add new +
                  </div>
               </div>
            </div>
         </Container>
      )}
   </AppContext.Consumer>
);

export default Settings;
