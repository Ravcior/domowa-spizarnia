import React from 'react';
import styles from './Row.module.scss';

const Row = ({ content, icon }) => (
   <div className={styles.row}>
      <div className={styles.img}>
         <img src={icon} alt="" />
      </div>
      <div className={styles.name}>{content[0]}</div>
      <div className={styles.state}>{content[2]}</div>
   </div>
);

export default Row;
