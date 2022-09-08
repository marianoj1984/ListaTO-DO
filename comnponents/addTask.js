import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTask.js";
export const addTask = (event)=>{
    event.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value; 
    const date = calendar.value;
    const complete = false;

    const fecha = moment(date).format('DD/MM/YYYY');
    
    if(value=='' || date==''){
        return;
    }

    list.innerHTML = "";
    input.value = "";
    calendar.value = "";

    const taskObj = {
        value,
        fecha,
        complete,
        id: uuid.v4()
    };
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    
    readTask();
}


export const hacerTask = ({value, fecha, complete, id}) => {
    
    const task = document.createElement("li");
            task.classList.add("card");

    const taskContent = document.createElement("div");

    const check = checkComplete(id);
    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
            taskContent.appendChild(check);

    const titleTask = document.createElement("span");
            titleTask.classList.add("task");
            titleTask.innerText = value;
            taskContent.appendChild(titleTask);
    
    const dateElement = document.createElement("span");
            dateElement.innerHTML = fecha;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));

    return task;
}
