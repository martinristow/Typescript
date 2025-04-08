import {getAllTasks, showTasks} from "./models/tasks";

export {};

const response = await getAllTasks();

showTasks(response);