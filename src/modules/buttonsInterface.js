//import { body } from "../index.js";
import { getToDo } from "./getToDo.js";
//import { toDoObject } from "./toDoObject.js";   
import { toDoListArray } from "./arrayIIFE.js";
import { displayToDo } from "./displayToDo.js";
//import { renderStorageToDom } from "./renderStorage.js";
import { getEditingID, setEditingID } from "./editingId.js";
//import { editingID } from "./editingId.js";

//const editingID = getEditingID();

//UI buttons
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog , .new"); // can select with css selectors
const closeBtn = document.querySelector(".closeModal");
const addBtn = document.querySelector(".addToDo");
const deleteBtn = document.querySelector(".deleteAll");


// button functions modules
// maybe export as function all of this

deleteBtn.addEventListener('click', () => {  //DELETE ALL
    const container = document.querySelector(".toDoDisplay")
    container.innerText = "";
    toDoListArray.clearArray();
    //console.log(toDoListArray.toDoListArray);
})

showBtn.addEventListener('click', () => {
    dialog.showModal();
    //console.log("show dialog")

});

closeBtn.addEventListener('click', () => {
    dialog.close();
    //console.log("closed dialog")
});


addBtn.addEventListener('click', () => {
    //creatig states of add button
    const currentID = getEditingID();

    if(currentID !== null){

    const updateData = getToDo();
    toDoListArray.updateToDo(currentID, updateData);
    //displayToDo();

        //finding div to edit from the data attribute div
        //console.log(currentID);
    const toDoElement = document.querySelector(`div[data-id="${currentID}"]`);
    const titleElement = toDoElement.querySelector("h2");
    const dateElement = toDoElement.querySelector("p");

    titleElement.innerText = updateData.title;
    dateElement.innerText = updateData.dueDate;
    toDoListArray.localStorageManagement();

    }else {

  const newToDo = getToDo();
  toDoListArray.addToArray(newToDo);
  //console.log(toDoListArray.getArray());
  displayToDo(newToDo);
  //adding to local storage // adds only one item
  //localStorage.setItem(`${toDoListArray.findToDoId(newToDo)}`, JSON.stringify(newToDo));
  //localStorage.setItem("array of objects", toDoListArray);
    toDoListArray.localStorageManagement();
}

  //editingID = null;
  setEditingID(null);
  dialog.close();

});


export {dialog, showBtn, closeBtn, addBtn, deleteBtn, };
