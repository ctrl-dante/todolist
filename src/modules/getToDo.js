import { toDoObject } from "./toDoObject.js";   
import { toDoListArray } from "./arrayIIFE.js";
import { displayToDo } from "./displayToDo.js";
import { body, setEditingID} from "../index.js";
import { renderStorageToDom } from "./renderStorage.js";
//import { editingID } from "./editingId.js";


const getToDo = () => {

    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const dueDate = document.querySelector('.date').value;
    const priority = document.querySelector(".priority").value;
    const project = document.querySelector(".project").value;

        const toDo = new toDoObject(title,description,dueDate,priority,project);
           
       // const toDoSerialized = JSON.stringify(toDo); // stringify to seralize
        
       // localStorage.setItem("toDo", toDoSerialized);

       // console.log(localStorage.getItem("toDo"));

       // const toDoDeserialized = JSON.parse(localStorage.getItem("toDo"));

       // console.log(toDoDeserialized);

       // toDo.displayToDoConsole();
       // console.log("+++++++++++DEBBUGING+++++++++++");
       // console.log(date.__proto__);
       // console.log(date);
       // console.log("+++++++++++++++++++++++++++++++");

    return toDo

    };

    export {getToDo}