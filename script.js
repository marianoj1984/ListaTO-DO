
import checkComplete from "./comnponents/checkComplete.js";
import deleteIcon from "./comnponents/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");

const hacerTask = event => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    input.value = "";


    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    
}
btn.addEventListener("click", hacerTask);


