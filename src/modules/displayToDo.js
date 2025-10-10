//import { getToDo } from "./getToDo.js";
//import { toDoObject } from "./toDoObject.js";   
import { toDoListArray } from "./arrayIIFE.js";
//import { body} from "../index.js";
//import { renderStorageToDom } from "./renderStorage.js";
import { dialog, showBtn, closeBtn, addBtn, deleteBtn } from "./buttonsInterface.js";
import { editingID, getEditingID, setEditingID } from "./editingId.js";
//import { editingID } from "./editingId.js";
   
   const displayToDo = (toDoToDisplay) => {

          const toDoElement = document.createElement("div");
          const toDoElementTitle = document.createElement("h2");
          const toDoElementDueDate = document.createElement("p");
          
          const container = document.querySelector(".toDoDisplay");

                const deleteToDoBtn = document.createElement("button");
                const editToDoBtn = document.createElement("button");
                deleteToDoBtn.innerText = "Delete";
                editToDoBtn.innerText = "See or Edit";

          const toDo = toDoToDisplay;

          toDoElement.setAttribute("data-id",`${toDo.id}`);

          toDoElementTitle.innerText = `${toDo.title}`;
          toDoElementDueDate.innerText =  `${toDo.dueDate}`;

          //console.log(toDo);

          toDoElement.appendChild(toDoElementTitle);
          toDoElement.appendChild(toDoElementDueDate);
          toDoElement.appendChild(deleteToDoBtn);
          toDoElement.appendChild(editToDoBtn);
          
          container.appendChild(toDoElement);
          //body.appendChild(container);

        //   if(deleteToDo() < 1){
        //     deleteToDo();
        //   }

        //edit the content of to do
        editToDoBtn.addEventListener('click', (e) => {

            //console.log(e.target.parentElement);

            const idToEdit = e.target.parentElement.getAttribute("data-id");

            setEditingID(idToEdit);
            //console.log(idToEdit);

            //find object to edit

            const toDoEdit = toDoListArray.findToDoId(idToEdit);

            //fill modal with edit

            document.querySelector(".title").value = toDoEdit.title;
            document.querySelector(".description").value = toDoEdit.description;
            document.querySelector('.date').value = toDoEdit.dueDate;
            document.querySelector(".priority").value = toDoEdit.priority;
            document.querySelector(".project").value = toDoEdit.project;

            // toDoListArray.findToDoId(e.target.parentElement);
            // dialog.showModal();
            // toDoListArray.updateToDo(toDoListArray.findToDoId(), getToDo);
            //getToDo();
            //showBtn.addEventListener('click', () => {
            //editToDo();
            //console.log("show dialog")
             //});

             dialog.showModal();
        })

           //remove to do
        deleteToDoBtn.addEventListener('click', (e) => {

            const idToDelete = e.target.parentElement.getAttribute("data-id");

            e.target.parentElement.remove();
            toDoListArray.deleteId(idToDelete);
            //console.log(e.target.parentElement);
            //e.remove(e.parentElement);

        });

 };

 export { displayToDo }