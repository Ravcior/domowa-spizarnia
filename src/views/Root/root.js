import React from 'react';
import {
   BrowserRouter,
   Route,
   Switch,
} from 'react-router-dom';
import AppContext from './../../context';
import Wrapper from './../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Magazine from '../magazineView/Magazine';
import ShoppingList from '../shoppingView/ShoppingList';
import Settings from '../settingsView/Settings';
import ItemAddForm from '../../components/ItemAddForm/ItemAddForm';

import appleIcon from '../../assets/FruitsIcons/icon-colour-apple.png';
import avocadoIcon from '../../assets/FruitsIcons/icon-colour-avocado.png';
import grapesIcon from '../../assets/FruitsIcons/icon-colour-grapes.png';
import peachIcon from '../../assets/FruitsIcons/icon-colour-peach.png';
import watermelonIcon from '../../assets/FruitsIcons/icon-colour-watermelon.png';
import strawberryIcon from '../../assets/FruitsIcons/icon-colour-strawberry.png';
import pineappleIcon from '../../assets/FruitsIcons/icon-colour-pineapple.png';
import lemonIcon from '../../assets/FruitsIcons/icon-colour-lemon.png';
import pepperIcon from '../../assets/FruitsIcons/pepper.png';
import broccoliIcon from '../../assets/FruitsIcons/broccoli.png';

class Root extends React.Component {
   state = {
      isOpenAddForm: false,
      minAmount: 3,
      activeCategory: null,
      categories: ['fruits', 'vegetables', 'dairy'],
      products: [
         ['Apple', 'fruits', 1, appleIcon],
         ['Avocado', 'fruits', 5, avocadoIcon],
         ['Grapes', 'fruits', 2, grapesIcon],
         ['Peach', 'fruits', 4, peachIcon],
         ['Watermelon', 'fruits', 1, watermelonIcon],
         ['Strawberry', 'fruits', 30, strawberryIcon],
         ['Pineapple', 'fruits', 1, pineappleIcon],
         ['Lemon', 'fruits', 3, lemonIcon],
         ['Pepper', 'vegetables', 2, pepperIcon],
         ['Broccoli', 'vegetables', 0, broccoliIcon],
      ],
   };

   spawnNotification() {
      if (
         !window.Notification ||
         Notification.permission === 'denied'
      ) {
         return;
      }

      Notification.requestPermission();

      const date = Date.now();
      localStorage.setItem('lastVisit', date);
   }

   showNotification() {
      const date = Date.now();
      if (
         date - localStorage.getItem('lastVisit') >
         1000 * 60 * 60 * 24 * 2
      ) {
         const notification = new Notification(
            'Zaktualizuj liste posiadanych rzeczy!'
         );
         const date = Date.now();
         localStorage.setItem('lastVisit', date);
      }
   }

   componentDidMount() {
      if (!localStorage.getItem('lastVisit')) {
         this.spawnNotification();
      }
      this.showNotification();
      if (!localStorage.getItem('state')) {
         localStorage.setItem(
            'state',
            JSON.stringify(this.state)
         );
      } else {
         this.setState(
            JSON.parse(localStorage.getItem('state'))
         );
         this.setState({ activeCategory: null });
      }
   }

   componentDidUpdate() {
      localStorage.setItem(
         'state',
         JSON.stringify(this.state)
      );
   }

   changeActiveCat = (value) => {
      this.setState({
         activeCategory: value.item,
      });
   };

   openAddForm = () => {
      this.setState({ isOpenAddForm: true });
   };

   closeAddForm = () => {
      this.setState({ isOpenAddForm: false });
   };

   addItem = (e, content) => {
      e.preventDefault();
      if (content.name.length && content.category !== 0) {
         if (
            this.state.products.filter(
               (item) => item[0] === content.name
            ).length
         ) {
            alert('This product already exist!');
         } else {
            const newItem = [];
            for (let obj in content) {
               newItem.push(content[obj]);
            }
            const arr = this.state.products;
            arr.unshift(newItem);
            this.setState({ products: arr });
            this.closeAddForm();
         }
      } else if (!content.name.length) {
         alert('Complete "Name" field!');
      } else if (content.category === 0) {
         alert('Choose the category!');
      }
   };

   confirmDelete = (key) =>
      window.confirm('Do you want to delete this item?')
         ? this.removeItem(key)
         : null;

   removeItem = (key) => {
      const newState = this.state.products.filter(
         (item) => {
            return item[0] !== key;
         }
      );

      this.setState({
         products: newState,
      });
   };

   editItem = (name) => {
      const result = prompt('Change the name', name);
      let copyOfState = this.state.products;
      let exist = false;
      copyOfState.forEach((el) => {
         if (el[0] === result) {
            alert('This name is already using!');
            exist = true;
         }
      });
      if (!exist) {
         copyOfState.map((el) => {
            if (el[0] === name) {
               el[0] = result;
            }
            return el;
         });
      }
      this.setState({ products: copyOfState });
   };

   addValue = (key) => {
      const newState = this.state.products.map((item) =>
         item[0] === key
            ? [item[0], item[1], item[2] + 1, item[3]]
            : item
      );

      this.setState({ products: newState });
   };

   substrValue = (key) => {
      const newState = this.state.products.map((item) =>
         item[0] === key
            ? item[2] === 0
               ? item
               : [item[0], item[1], item[2] - 1, item[3]]
            : item
      );

      this.setState({ products: newState });
   };

   changeMinAmount = (e) => {
      this.setState({
         minAmount: parseInt(e.target.value),
      });
   };

   addNewCategory = () => {
      const result = prompt('Add new category');
      const copyOfState = this.state.categories;
      if (result.length) {
         let exist = false;
         copyOfState.filter((el) => {
            if (el === result) {
               alert('This category already exist!');
               exist = true;
            }
            return null;
         });

         if (!exist) {
            copyOfState.push(result);
            this.setState({ categories: copyOfState });
         }
      } else {
         alert('Complete "Name" field!');
      }
   };

   confirmDeleteCategory = (key) =>
      window.confirm(
         'Do you want to delete this category? All of item from this category will be delete!'
      )
         ? this.removeCategory(key)
         : null;

   removeCategory = (key) => {
      const newItemList = this.state.products.filter(
         (item) => {
            if (item[1] !== key) {
               return item;
            }
            return false;
         }
      );

      const newState = this.state.categories.filter(
         (item) => {
            return item !== key;
         }
      );

      this.setState({
         products: newItemList,
         categories: newState,
      });
   };

   render() {
      const context = {
         ...this.state,
         changeActiveCat: this.changeActiveCat,
         openSettings: this.openSettings,
         openShoppingList: this.openShoppingList,
         openAddForm: this.openAddForm,
         closeAddForm: this.closeAddForm,
         addItem: this.addItem,
         removeItem: this.confirmDelete,
         substrValue: this.substrValue,
         addValue: this.addValue,
         editName: this.editItem,
         changeMinAmount: this.changeMinAmount,
         addNewCategory: this.addNewCategory,
         deleteCategory: this.confirmDeleteCategory,
      };

      return (
         <BrowserRouter>
            <AppContext.Provider value={context}>
               <Header />
               <Wrapper>
                  <Switch>
                     <Route
                        exact
                        path="/settings"
                        component={Settings}
                     />
                     <Route
                        exact
                        path="/shopping-list"
                        component={ShoppingList}
                     />
                     <Route path="/" component={Magazine} />
                  </Switch>
               </Wrapper>
               {this.state.isOpenAddForm ? (
                  <ItemAddForm />
               ) : null}
            </AppContext.Provider>
         </BrowserRouter>
      );
   }
}

export default Root;
