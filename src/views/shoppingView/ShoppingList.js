import React from 'react';
import styles from './ShoppingList.module.scss';
import AppContext from '../../context';
import Container from '../../components/Container/Container';
import Row from '../../components/Row/Row';
import Title from '../../components/Title/Title';

const ShoppingList = () => (
   <Container>
      <Title>Shopping List</Title>
      <div className={styles.listBox}>
         <AppContext.Consumer>
            {(context) =>
               context.products.filter(
                  (item) => item[2] < context.minAmount
               ).length ? (
                  context.products
                     .filter(
                        (item) =>
                           item[2] < context.minAmount
                     )
                     .map((item) => (
                        <Row
                           key={item[0]}
                           content={item}
                           icon={item[3]}
                        />
                     ))
               ) : (
                  <Title>
                     <br />
                     There is nothing!
                  </Title>
               )
            }
         </AppContext.Consumer>
      </div>
   </Container>
);

export default ShoppingList;
