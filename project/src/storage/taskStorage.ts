import {TasksInterface} from "../interfaces/TasksInterface";
import {showTasks} from "../models/tasks";

export function addTask(task: TasksInterface): void {

    const existing: string | null = localStorage.getItem("tasks");

    let tasks: TasksInterface[] = []

    if (existing) {
        tasks = JSON.parse(existing);
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


export function getTasks(): TasksInterface[] | undefined {
    const allTasks: string | null = localStorage.getItem("tasks");

    if (allTasks) {
        const parsedTasks: TasksInterface[] = JSON.parse(allTasks);
        showTasks(parsedTasks);
        return parsedTasks;
    }
}
