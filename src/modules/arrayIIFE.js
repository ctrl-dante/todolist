import { getToDo } from "./getToDo.js";
import { toDoObject } from "./toDoObject.js";   
import { displayToDo } from "./displayToDo.js";
import { body } from "../index.js";
import { renderStorageToDom } from "./renderStorage.js";
import { editingID } from "./editingId.js";

const toDoListArray =(() => {

    let toDoListArray = [];

    const toDoStorage = localStorage.getItem("toDoStorage");
    //console.log(toDoStorage);

    if(toDoStorage){
        const deserializedStorage = [] = JSON.parse(toDoStorage);
        //console.log(deserializedStorage);
        toDoListArray = deserializedStorage;
    }

     const getArray = () => toDoListArray;

     const localStorageManagement = () => {
         const arraySerialilzed = JSON.stringify(getArray());
         localStorage.setItem("toDoStorage",arraySerialilzed);
    };

    const clearArray = () => {

        toDoListArray = [];
        //console.log("Array Cleared")
        //console.log(toDoListArray);
        localStorageManagement();

    };
   
    const addToArray = (arrayItem) => {
        let id = crypto.randomUUID(); // add id
        arrayItem.id = id;
        toDoListArray.push(arrayItem);
        localStorageManagement();
    };

    //console.log(toDoListArray());
    const deleteId = (id) => {
        toDoListArray = toDoListArray.filter(element => element.id !== id); // gets the div id and checks if it is with the item.id
        //console.log(toDoListArray);
        localStorageManagement();
    };

    const findToDoId = (id) => {
        //find()
        const foundToDo = toDoListArray.find((element) => element.id === id);
        //console.log(foundToDo);
        //console.log(id);
        
        return foundToDo
    };

    const updateToDo = (id, newToDo) => {

            const toDoUpdate = findToDoId(id);
            
            if (toDoUpdate){

            toDoUpdate.title = newToDo.title
            toDoUpdate.description = newToDo.description
            toDoUpdate.date = newToDo.date
            toDoUpdate.priority = newToDo.priority
            toDoUpdate.project = newToDo.project

             }

        //editedToDo.edit("longIsland","longIsland","longIsland","longIsland","longIsland",);
        // console.log(getToDo().title);
        //const editedToDo = getToDo();
        //console.log(editedToDo.title);
        //return editedToDo

    };

    return {addToArray, getArray, deleteId, clearArray, findToDoId, updateToDo, localStorageManagement //never expose directly from  encapsulated function
   
    };
})();

export {toDoListArray}