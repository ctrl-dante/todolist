import { testLog } from "./moduleTest";

testLog();

const body = document.body;


const toDoListArray =(() => {

    const toDoListArray = [];

    const addToArray = (arrayItem) => {
        toDoListArray.push(arrayItem);
    };

    //console.log(toDoListArray());

    return {addToArray, toDoListArray,

    }

})();

// to do object

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

    edit(title,description,dueDate,priority,project){

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

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


}

//const todo1 = new toDoObject("note","firstNote","tommorrow Hopefully","High","Personal");

//console.log(todo1.displayToDo());

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog , .new"); // can select with css selectors
const closeBtn = document.querySelector(".closeModal");
const addBtn = document.querySelector(".addToDo");
const deleteBtn = document.querySelector(".deleteAll");

deleteBtn.addEventListener('click', () => {
    const container = document.querySelector(".toDoDisplay")
    container.innerText = "";
})

showBtn.addEventListener('click', () => {
    dialog.showModal();
    console.log("show dialog")

});

closeBtn.addEventListener('click', () => {
    dialog.close();
    console.log("closed dialog")
});

addBtn.addEventListener('click', () => {

getToDo();
displayToDo();
toDoListArray.addToArray(getToDo());
console.log(toDoListArray.toDoListArray);


});

const date = new Date(); console.log(date.getMinutes());

//CREATE TO DO GET it From DOM
const getToDo = () => {

    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const date = document.querySelector('.date').value;
    const priority = document.querySelector(".priority").value;
    const project = document.querySelector(".project").value;

        const toDo = new toDoObject(title,`Description: ${description}`,date,`Priority: ${priority}`,`Project: ${project}`);
        
        
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

    const editToDo = () => {

        const editedToDo = getToDo();

        editedToDo.edit("longIsland","longIsland","longIsland","longIsland","longIsland",);

       // console.log(getToDo().title);


        // editedToDo.title = document.querySelector(".title").value
        // editedToDo.description = document.querySelector(".description").value;
        // editedToDo.date = document.querySelector('.date').value;
        // editedToDo.priority = document.querySelector(".priority").value;
        // editedToDo.project = document.querySelector(".project").value;

        //const editedToDo = getToDo();

        console.log(editedToDo.title);

        //editedToDo  = toDoObject(title,`Description: ${description}`,date,`Priority: ${priority}`,`Project: ${project}`);

        return editedToDo
    };

 const displayToDo = () => {

          const toDoElement = document.createElement("div");
          const toDoElementTitle = document.createElement("h2");
          const toDoElementDueDate = document.createElement("p");
          const container = document.querySelector(".toDoDisplay");
          const deleteToDoBtn = document.createElement("button");
          const editToDoBtn = document.createElement("button");

          deleteToDoBtn.innerText = "Delete To Do";
          editToDoBtn.innerText = "Edit To Do";


          const toDo = getToDo();

          toDoElementTitle.innerText = `${toDo.title}`;
          //console.log(toDo.date.value);
          toDoElementDueDate.innerText =  toDo.dueDate;

          toDoElement.appendChild(toDoElementTitle);
          toDoElement.appendChild(toDoElementDueDate);
          toDoElement.appendChild(deleteToDoBtn);
          toDoElement.appendChild(editToDoBtn);

          container.appendChild(toDoElement);
          body.appendChild(container);

        //   if(deleteToDo() < 1){
        //     deleteToDo();
        //   }

        //remove to do
        deleteToDoBtn.addEventListener('click', (e) => {

            e.target.parentElement.remove();
            //e.remove(e.parentElement);

        });

        //edit the content of to do
        editToDoBtn.addEventListener('click', (e) => {
            console.log(e.target.parentElement);
            dialog.showModal();
            //getToDo();
            //showBtn.addEventListener('click', () => {
            editToDo();
            //console.log("show dialog")
             //});
        })

 };

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

