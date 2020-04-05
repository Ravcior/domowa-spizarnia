import React from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../../../context';
import styles from './Navigation.module.scss';

const Navigation = () => (
   <nav className={styles.navBar}>
      <AppContext.Consumer>
         {(context) => (
            <ul className={styles.menu}>
               {context.categories.map((item) => (
                  <li
                     className={styles.menu_item}
                     key={item}
                  >
                     <NavLink
                        to={item}
                        activeStyle={{
                           color: '#fff',
                           background: '#7bed8d',
                           borderRadius: 52 + 'px',
                        }}
                        onClick={() =>
                           context.changeActiveCat({ item })
                        }
                     >
                        {item}
                     </NavLink>
                  </li>
               ))}
            </ul>
         )}
      </AppContext.Consumer>
   </nav>
);

export default Navigation;
