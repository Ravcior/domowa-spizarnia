import React from 'react';
import AppContext from '../../context';
import styles from './ItemAddForm.module.scss';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

class ItemAddForm extends React.Component {
   state = {
      name: '',
      category: 0,
      quantity: 0,
      imgURL: '',
   };

   handleChangeInoutValue = (e) =>
      e.target.type === 'number'
         ? this.setState({
              [e.target.name]: parseInt(e.target.value),
           })
         : this.setState({
              [e.target.name]: e.target.value,
           });

   render() {
      return (
         <AppContext.Consumer>
            {(context) => (
               <ModalWrapper
                  context={context}
                  title="Add New Item"
               >
                  <form className={styles.addForm}>
                     <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"
                        id="name"
                        onChange={
                           this.handleChangeInoutValue
                        }
                     />
                     <input
                        type="text"
                        placeholder="Img URL"
                        name="imgURL"
                        id="imgURL"
                        onChange={
                           this.handleChangeInoutValue
                        }
                     />
                     <input
                        type="number"
                        min="0"
                        placeholder="Quantity"
                        required
                        name="quantity"
                        id="quantity"
                        onChange={
                           this.handleChangeInoutValue
                        }
                     />
                     <select
                        type="number"
                        placeholder="Category"
                        name="category"
                        id="category"
                        onChange={
                           this.handleChangeInoutValue
                        }
                     >
                        <option value={0}>
                           Choose category
                        </option>
                        {context.categories.map((item) => (
                           <option key={item} value={item}>
                              {item}
                           </option>
                        ))}
                     </select>
                     <button
                        type="submit"
                        className={styles.addBtn}
                        onClick={(e) =>
                           context.addItem(e, this.state)
                        }
                     >
                        Add Item
                     </button>
                  </form>
               </ModalWrapper>
            )}
         </AppContext.Consumer>
      );
   }
}

export default ItemAddForm;
