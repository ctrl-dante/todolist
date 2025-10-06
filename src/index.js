import { testLog } from "./moduleTest";

testLog();

const body = document.body;

// to do object 

const toDoObject = class{

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

    edit(){
        //edit to do
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
        toDo.displayToDoConsole();
        // console.log("+++++++++++DEBBUGING+++++++++++");
        // console.log(date.__proto__);
        // console.log(date);
        // console.log("+++++++++++++++++++++++++++++++");

    return toDo

    };

 const displayToDo = () => {

          const toDoElement = document.createElement("div");
          const toDoElementTitle = document.createElement("h2");
          const toDoElementDueDate = document.createElement("p");
          const container = document.querySelector(".toDoDisplay")

          const toDo = getToDo();

          toDoElementTitle.innerText = `${toDo.title}`;
          //console.log(toDo.date.value);
          toDoElementDueDate.innerText =  toDo.dueDate;

          toDoElement.appendChild(toDoElementTitle);
          toDoElement.appendChild(toDoElementDueDate);
          container.appendChild(toDoElement);

          body.appendChild(container);

        //   if(deleteToDo() < 1){
        //     deleteToDo();
        //   }
        
            deleteToDo();
          

 };

 

const deleteToDo = () => {

    const toDoElement = document.querySelectorAll("div");

    toDoElement.forEach(element => {
            const deleteToDoBtn = document.createElement("button");
            deleteToDoBtn.innerText = "Delete To Do";
            element.appendChild(deleteToDoBtn);
    })

 

 }



   deleteToDo.deleteBtn.addEventListener('click', () => {
        parentElement.innerText = "";
        console.log("delete");
    })
