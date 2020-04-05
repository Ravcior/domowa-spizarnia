import React from 'react';
import AppContext from '../../context';
import Container from '../../components/Container/Container';
import Card from './../../components/Card/Card';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import styles from './Magazine.module.scss';

const List = () => {
   return (
      <AppContext.Consumer>
         {(context) => (
            <>
               <Container>
                  <div className={styles.ListBox}>
                     {context.activeCategory === null ? (
                        context.products.map((item) => (
                           <Card
                              key={item}
                              icon={item[3]}
                              name={item[0]}
                              state={item[2]}
                           />
                        ))
                     ) : context.products.filter((el) =>
                          el[1] === context.activeCategory
                             ? el
                             : null
                       ).length ? (
                        context.products
                           .filter((el) =>
                              el[1] ===
                              context.activeCategory
                                 ? el
                                 : null
                           )
                           .map((item) => (
                              <Card
                                 key={item}
                                 icon={item[3]}
                                 name={item[0]}
                                 state={item[2]}
                              />
                           ))
                     ) : (
                        <Title>There is Nothing :(</Title>
                     )}
                     {/* {context.products.filter((el) =>
                        el[1] === context.activeCategory
                           ? el
                           : null
                     ).length ? (
                        context.products
                           .filter((el) =>
                              el[1] ===
                              context.activeCategory
                                 ? el
                                 : null
                           )
                           .map((item) => (
                              <Card
                                 key={item}
                                 icon={item[3]}
                                 name={item[0]}
                                 state={item[2]}
                              />
                           ))
                     ) : (
                        <Title>There is Nothing :(</Title>
                     )} */}
                  </div>
               </Container>
               <div
                  onClick={() => context.openAddForm()}
                  className={styles.addBtn}
               >
                  <Button>Add New Product</Button>
               </div>
            </>
         )}
      </AppContext.Consumer>
   );
};

export default List;
