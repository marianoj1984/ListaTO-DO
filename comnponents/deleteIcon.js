import { readTask } from "./readTask.js";
const deleteIcon = (id)=>{
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deleteTask(id));
    return i;
}

const deleteTask = (id)=>{
    const list = document.querySelector("[data-list]");
    const task = JSON.parse(localStorage.getItem("tasks"));
    const index = task.findIndex( (item) => item.id==id);
    task.splice(index, 1);
    list.innerHTML = "";
    localStorage.setItem("tasks", JSON.stringify(task));
    readTask();
}
export default deleteIcon;