import { testLog } from "./moduleTest";

testLog();

// to do object 

const toDoObject = class{

    constructor(title,description,dueDate,priority,project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    //maybe the display should not be on the to do constructor
    displayToDo(){
        console.log(this.title);
        console.log(this.description);
        console.log(this.priority);
        console.log(this.project);
    };

}

const todo1 = new toDoObject("note","firstNote","tommorrow Hopefully","High","Personal");

//console.log(todo1.displayToDo());

//CREATE TO DO 

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog , .new"); // can select with css selectors
const closeBtn = document.querySelector(".closeModal");
const addBtn = document.querySelector(".addToDo");


showBtn.addEventListener('click', () => {
    dialog.showModal();
    console.log("show dialog")
    
});


closeBtn.addEventListener('click', () => {
    dialog.close();
    console.log("closed dialog")
});

addBtn.addEventListener('click', () => {

    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const date = document.querySelector('.date').valueAsDate;
    const priority = document.querySelector(".priority").value;
    const project = document.querySelector(".project").value;

    const toDo =  new toDoObject(title,description,date.target,priority,project);

    console.log(toDo.displayToDo());
});



