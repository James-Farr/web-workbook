'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
  window.onload=function(){

    let listCountMessage = setListMessage();
    createListCountHeaderElement();
    updateListCountHeaderMessage();
    createNewItemTextInput();
    addRemoveButtonstoExistingItems();

    function setListMessage(){
      let list = document.getElementById("shopping-list");
      return "This Page has "+ list.children.length + " items in the shopping cart.";
    }
    function createListCountHeaderElement(message){
      let listHeading = document.createElement("h2");
      document.getElementsByTagName("h1")[0].appendChild(listHeading);
      let count = document.getElementById("shopping-list");
      listHeading.setAttribute("id", "list-heading");
    }
    function updateListCountHeaderMessage(){
      let listAlert = setListMessage();
      let listHeading = document.getElementById("list-heading");
      listHeading.innerHTML = listAlert;
    }
    function addRemoveButtonstoExistingItems(){
      let list=document.getElementById("shopping-list");
      for (let i=0; i<list.children.length; i++){
        addRemoveButton(list.children[i]);
      }
    }
    function addRemoveButton (appendElement){
      console.log(appendElement);
      let removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.onclick = deleteItem;
      appendElement.appendChild(removeButton);
      updateListCountHeaderMessage();
    }
    function createNewItemTextInput(){
      let textField = document.getElementById("item-text");
      textField.setAttribute("placeholder", "type of item to add");
      let addButton = document.getElementById("add-button");
      addButton.innerHTML="Add Item";
      addButton.onclick=addItem;
      document.getElementById("add-item").appendChild(textField);
      document.getElementById("add-item").appendChild(addButton);
    }
    function addItem(event){
      event.preventDefault();
      let newItemText = document.getElementById("item-text").value;
      let newItem = document.createElement("li");
      newItem.innerHTML = newItemText;
      document.getElementById("shopping-list").appendChild(newItem);
      updateListCountHeaderMessage();
      addRemoveButton(newItem);
      document.getElementById('add-item').reset();
    }
    function deleteItem(){
      this.parentNode.remove(this);
      updateListCountHeaderMessage();
    }


  }
  // });
