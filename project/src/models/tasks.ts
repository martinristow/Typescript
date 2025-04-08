import axios from "axios";
import {TasksInterface} from "../interfaces/TasksInterface";

export async function getAllTasks(): Promise<TasksInterface[] | undefined> {
    try {
        const response = await axios.get('./data/tasks.json');
        return response.data;
    } catch (error) {
        console.log("error", error)
    }
}


export function showTasks(tasks: TasksInterface[] | undefined): void {

    const taskListElement = document.getElementById('taskList') as HTMLDivElement;

    tasks?.forEach((task: TasksInterface) => {

        const taskDiv: HTMLDivElement = document.createElement("div");

        const taskTitle: HTMLHeadingElement = document.createElement("h3");
        taskTitle.innerText = task.title;

        const taskDescription: HTMLParagraphElement = document.createElement("p");
        taskDescription.innerText = task.description;

        const taskDueDate: HTMLParagraphElement = document.createElement("p");
        taskDueDate.innerText = task.due_date;

        taskDiv.append(taskTitle, taskDescription, taskDueDate);

        taskListElement.appendChild(taskDiv);
    })


}