import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children }) => (
   <div className={styles.btn}>{children}</div>
);

export default Button;
