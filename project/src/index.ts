import {TasksInterface} from "./interfaces/TasksInterface";
import {addTask, getTasks} from "./storage/taskStorage";

export {};

// const response = await getAllTasks();
//
// if(response){
//     showTasks(response);
// }
getTasks();

const taskForm = document.getElementById("createTaskForm") as HTMLFormElement;
taskForm.addEventListener("submit", (event: SubmitEvent): void => {

    const taskTitle = document.getElementById("taskTitle") as HTMLInputElement;
    const taskDescription = document.getElementById("taskDescription") as HTMLInputElement;
    const taskDueDate = document.getElementById("taskDueDate") as HTMLInputElement;

    if (!taskTitle.value.trim() || !taskDescription.value.trim() || !taskDueDate.value.trim()) {
        alert("All input fields are required!");
        return;
    }

    const now = new Date();
    const dueComparedDate = new Date(taskDueDate.value);
    console.log(dueComparedDate);
    if (dueComparedDate < now) {
        alert("Due date must be in future");
        return;
    }

    const task: TasksInterface = {
        title: taskTitle.value,
        description: taskDescription.value,
        due_date: taskDueDate.value,
    };

    addTask(task);


    // console.log(taskTitle.value, taskDescription.value, taskDueDate.value);
})