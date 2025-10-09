import { testLog } from "./moduleTest";

testLog();

const body = document.body;
let editingID = null;

// toDo Object

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

    //Not functional yet

    //maybe the display should not be on the to do constructor
    displayToDoConsole(){

        console.log(this.title);
        console.log(this.description);
        console.log(this.dueDate);
        console.log(this.priority);
        console.log(this.project);

    };

    isComplete(){
        //add check box if it is complete
    }
        //singularity says one object/function one purpose
    delete(){
        //delete to do
    }

};



//add toDo array functions
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


//const todo1 = new toDoObject("note","firstNote","tommorrow Hopefully","High","Personal");

//console.log(todo1.displayToDo());

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog , .new"); // can select with css selectors
const closeBtn = document.querySelector(".closeModal");
const addBtn = document.querySelector(".addToDo");
const deleteBtn = document.querySelector(".deleteAll");

//DELETE ALL

deleteBtn.addEventListener('click', () => {
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

    if(editingID !== null){

    const updateData = getToDo();
    toDoListArray.updateToDo(editingID, updateData);
    //displayToDo();

        //finding div to edit from the data attribute div
    const toDoElement = document.querySelector(`div[data-id="${editingID}"]`);
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

  editingID = null;
  dialog.close();

});

//const date = new Date(); console.log(date.getMinutes());

//CREATE TO DO GET it From DOM

const getToDo = () => {

    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const date = document.querySelector('.date').value;
    const priority = document.querySelector(".priority").value;
    const project = document.querySelector(".project").value;

        const toDo = new toDoObject(title,description,date,priority,project);
           
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

    // const editToDo = () => {

    //     //find to do to edit
    //     //get the information of to do to show on modal
    //     //edit to do 
    //     //change the dom of to do 
    //     //statee
    //     const editedToDo = getToDo();

    //     editedToDo.edit("longIsland","longIsland","longIsland","longIsland","longIsland",);

    //    // console.log(getToDo().title);


    //     // editedToDo.title = document.querySelector(".title").value
    //     // editedToDo.description = document.querySelector(".description").value;
    //     // editedToDo.date = document.querySelector('.date').value;
    //     // editedToDo.priority = document.querySelector(".priority").value;
    //     // editedToDo.project = document.querySelector(".project").value;

    //     //const editedToDo = getToDo();

    //     console.log(editedToDo.title);

    //     //editedToDo  = toDoObject(title,`Description: ${description}`,date,`Priority: ${priority}`,`Project: ${project}`);

    //     return editedToDo
    // };

 const displayToDo = (toDoToDisplay) => {

          const toDoElement = document.createElement("div");
          const toDoElementTitle = document.createElement("h2");
          const toDoElementDueDate = document.createElement("p");
          
          const container = document.querySelector(".toDoDisplay");

                const deleteToDoBtn = document.createElement("button");
                const editToDoBtn = document.createElement("button");
                deleteToDoBtn.innerText = "Delete To Do";
                editToDoBtn.innerText = "Edit To Do";

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
          body.appendChild(container);

        //   if(deleteToDo() < 1){
        //     deleteToDo();
        //   }

     
        //edit the content of to do
        editToDoBtn.addEventListener('click', (e) => {

            //console.log(e.target.parentElement);

            const idToEdit = e.target.parentElement.getAttribute("data-id");

            editingID = idToEdit;

            //find object to edit

            const toDoEdit = toDoListArray.findToDoId(idToEdit);

            //fill modal with edit

            document.querySelector(".title").value = toDoEdit.title;
            document.querySelector(".description").value = toDoEdit.description;
            document.querySelector('.date').value = toDoEdit.date;
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

 const renderStorageToDom = () => {
    const arrayToRender = toDoListArray.getArray();
    
    arrayToRender.forEach(element => displayToDo(element));

    console.log(arrayToRender);
 };

 renderStorageToDom();

 //THE END




 //To Delete From array and Dom

//  const deleteToDo = () => {

//           const deleteToDoBtn = document.createElement("button");
//           const editToDoBtn = document.createElement("button");
//           deleteToDoBtn.innerText = "Delete To Do";
//           editToDoBtn.innerText = "Edit To Do";

//           deleteBtn.forEach((button) => {
//             button.addEventListener('click', (e)=> {

//                 const divId = e.target.parentElement;
//                 const deletedItemId = divId.id;
//                 const existingToDoIDs = [];


//             })
//           });
    

//     const deletedItemId = toDoDivId.id;
//     console.log(deletedItemId);
//     if(toDoDivId === toDoId){
//         remove();
//     }
    
//  };

//  deleteToDo();

 //STORE TO DO's in local STORAGE

 //EDIT TO DO

// const toDoElement = document.querySelector("div");


// toDoElement.forEach(element => {
//         const deleteToDoBtn = document.createElement("button");
//         deleteToDoBtn.innerText = "Delete To Do";
//         element.appendChild(deleteToDoBtn);
// })


//    deleteToDo.deleteBtn.addEventListener('click', () => {
//         parentElement.innerText = "";
//         //removeChild();
//         console.log("delete");
//     })


//STORAGE EXERCISES


// localStorage.setItem("testKey", "testValue");

// sessionStorage.setItem("testSession", "testValue")
// sessionStorage.setItem("testSession","Bob");


// document.cookie = 'name=knexi; expires='+new Date(9999, 0, 1).toUTCString();


// document.cookie = 'lastName=rasta; expires='+new Date(9999, 0, 1).toUTCString();

// console.log(document.cookie);

