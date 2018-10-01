'use strict'; 
/* global Item, cuid, store */
const store = (function () { 
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ]; 

  let hideCheckedItems = false;
  let searchTerm = '';

  let findById = function(id){
    return items.find(item => item.id === id);
  };
  let addItem = function(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));

    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  let findAndUpdateName = function(id, newName){
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Cannot update name: ${error.message}`);
    }
  }; 

  let findAndToggleChecked = function(id){
    this.findById(id).checked = !this.findById(id).checked;
  };

  let findAndDelete = function(id){
    this.items = this.items.filter(item => id !== this.findById(item.id).id);
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  }; 
  
  const toggleCheckedFilter = function(){ 
    this.hideCheckedItems = !this.hideCheckedItems; 
  };

  return {items, hideCheckedItems, searchTerm, addItem, findAndToggleChecked, 
    findAndDelete, findAndUpdateName, findById, setSearchTerm, toggleCheckedFilter}; 
}()); 

