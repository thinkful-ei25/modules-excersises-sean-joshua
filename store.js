'use strict'; 
/* global store */
const store = (function () { 
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ]; 

  let hideCheckedItems = false;
  let searchTerm = '';
  let foo = 'bar'; 
  return {items, hideCheckedItems, searchTerm}; 
}()); 

console.log(store);
console.log(foo);
