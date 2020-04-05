import React from 'react';
import styles from './Title.module.scss';

const GreenTitle = ({ children }) => (
   <div className={styles.greenTitle}>{children}</div>
);

export default GreenTitle;
