 import { body, editingID} from "../index.js";
 import { toDoListArray } from "./arrayIIFE.js";
 import { displayToDo } from "./displayToDo.js";
 //import { editingID } from "./editingId.js";
 
 const renderStorageToDom = () => {
    const arrayToRender = toDoListArray.getArray();
    
    arrayToRender.forEach(element => displayToDo(element));

    // console.log(arrayToRender);
 };

export {renderStorageToDom};