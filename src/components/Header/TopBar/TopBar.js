import React from 'react';
import { NavLink } from 'react-router-dom';
import storeIcon from '../../../assets/Icons/icon-store.png';
import storeActiveIcon from '../../../assets/Icons/icon-store-active.png';
import settingIcon from '../../../assets/Icons/icon-settings.png';
import settingActiveIcon from '../../../assets/Icons/icon-settings-active.png';
import styles from './TopBar.module.scss';

const TopBar = () => (
   <div className={styles.wrapper}>
      <div className={styles.header}>
         <div className={styles.icon}>
            <NavLink
               to="/shopping-list"
               activeClassName={styles.selected}
            >
               <img src={storeIcon} alt="" />
               <img src={storeActiveIcon} alt="" />
            </NavLink>
         </div>
         <span>First React App</span>
         <div className={styles.icon}>
            <NavLink
               to="/settings"
               activeClassName={styles.selected}
            >
               <img src={settingIcon} alt="" />
               <img src={settingActiveIcon} alt="" />
            </NavLink>
         </div>
      </div>
   </div>
);

export default TopBar;
