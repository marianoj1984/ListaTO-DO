
import { addTask } from "./comnponents/addTask.js";
import { readTask } from "./comnponents/readTask.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

readTask();

