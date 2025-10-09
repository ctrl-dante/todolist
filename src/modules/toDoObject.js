 import { getToDo } from "./getToDo.js";
 import { editingID } from "./editingId.js";

import { toDoListArray } from "./arrayIIFE.js";
import { displayToDo } from "./displayToDo.js";
import { body } from "../index.js";
import { renderStorageToDom } from "./renderStorage.js";

 const toDoObject = class {

    constructor(title,description,dueDate,priority,project) {
         if(!new.target){
        throw Error("Not an object use new")
    }
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

};

export { toDoObject }
