import addGlobalEventListener from "./utils/addGlobalEventListener.js";
import setupDragAndDrop from "./dragAndDrop.js";
import { v4 as uuidV4 } from "uuid";

const STORAGE_PREFIX = "TRELLO_CLONE";
const LANES_STORAGE_KEY = `${STORAGE_PREFIX}-lanes`;
const DEFAULT_LANES = {
    backlog: [{ id: uuidV4(), text: "Create your first task" }],
    doing: [],
    done: [],
};
const lanes = loadLanes();
const formAddLane = document.querySelector("#form-add-lane");
const lanesContainer = document.querySelector(".lanes");
const laneTemplate = document.querySelector("#lane-template");
const taskTemplate = document.querySelector("#task-template");

//createLaneElement("ASSASA");
renderLanes();
setupDragAndDrop(onDragComplete);

addGlobalEventListener("submit", "[data-task-form]", (e) => {
    e.preventDefault();

    const taskInput = e.target.querySelector("[data-task-input]");
    const taskText = taskInput.value;
    if (taskText === "") return;

    const task = { id: uuidV4(), text: taskText };
    const laneElement = e.target.closest("[data-lane-id]");
    const tasks = laneElement.querySelector(".tasks");
    lanes[laneElement.dataset.laneId].push(task);

    const taskElement = createTaskElement(task);
    tasks.append(taskElement);
    taskInput.value = "";

    saveLanes();
});

addGlobalEventListener("click", "[data-delete-lane]", (e) => {
    deleteLane(e);
});

addGlobalEventListener("click", "[data-delete-task]", (e) => {
    deleteTask(e);
});

// addGlobalEventListener(
//     "mousedown",
//     "*",
//     (e) => {
//         console.log("Capturing:", e.target.tagName);
//     },
//     true
// );

function onDragComplete(e) {
    console.log(e);
    const startLaneId = e.startZone.closest("[data-lane-id]").dataset.laneId;
    const endLaneId = e.endZone.closest("[data-lane-id]").dataset.laneId;
    const startLaneTasks = lanes[startLaneId];
    const endLaneTasks = lanes[endLaneId];
    console.log(e);
    const task = startLaneTasks.find((t) => {
        return t.id === e.dragElement.id;
    });
    startLaneTasks.splice(startLaneTasks.indexOf(task), 1);
    endLaneTasks.splice(e.index, 0, task);
    saveLanes();
}

function loadLanes() {
    const lanesJson = localStorage.getItem(LANES_STORAGE_KEY);
    return JSON.parse(lanesJson) || DEFAULT_LANES;
}

function saveLanes() {
    localStorage.setItem(LANES_STORAGE_KEY, JSON.stringify(lanes));
}

function renderLanes() {
    Object.entries(lanes).forEach((obj) => {
        const laneId = obj[0];
        const laneElement = createLaneElement(laneId);
        lanesContainer.appendChild(laneElement);
        obj[1].forEach((task) => {
            renderTaskFromLane(task, laneElement);
        });
        /*
        const tasks = obj[1];
        const laneContainer = document.querySelector(
            `[data-lane-id="${laneId}"]`
        );
        console.log(obj);
        const tasksContainer = laneContainer.querySelector(".tasks");
        tasks.forEach((task) => {
            const taskElement = createTaskElement(task);
            tasksContainer.append(taskElement);
        })*/
    });
    // renderTasks();
}

function renderTaskFromLane(task, laneElement) {
    const tasksContainer = laneElement.querySelector(".tasks");
    const taskElement = createTaskElement(task);
    tasksContainer.append(taskElement);
}

function renderTasks() {
    Object.entries(lanes).forEach((obj) => {
        const laneId = obj[0];
        const tasks = obj[1];
        const laneContainer = document.querySelector(
            `[data-lane-id="${laneId}"]`
        );
        //console.log(obj);
        const tasksContainer = laneContainer.querySelector(".tasks");
        tasks.forEach((task) => {
            const taskElement = createTaskElement(task);
            tasksContainer.append(taskElement);
        });
    });
}

function createTaskElement(task) {
    // const element = document.createElement("div");
    // element.id = task.id;
    // element.innerText = task.text;
    // element.classList.add("task");
    // element.dataset.draggable = true;
    // return element;

    const element = taskTemplate.content.cloneNode(true);
    const taskElement = element.querySelector(".task");
    taskElement.id = task.id;
    taskElement.dataset.draggable = true;

    const taskName = taskElement.querySelector("[data-task-name]");
    taskName.innerText = task.text;
    return taskElement;
}

function createLaneElement(lane) {
    const laneTemplateClone = laneTemplate.content.cloneNode(true);
    const laneElement = laneTemplateClone.querySelector(".lane");
    laneElement.dataset.laneId = lane;
    const laneHeader = laneElement.querySelector(".header");
    laneHeader.innerText = lane;
    return laneElement;
}

function deleteLane(e) {
    const lane = e.target.closest(".lane");
    const laneID = lane.dataset.laneId;
    delete lanes[laneID];
    lane.remove();
    saveLanes();
}

function deleteLanes() {
    lanes = {};
    saveLanes();
}

formAddLane.addEventListener("submit", (e) => {
    e.preventDefault();
    const laneName = e.target.querySelector("#lane-name").value;
    if (laneName == "") return;
    const laneElement = createLaneElement(laneName);
    lanesContainer.appendChild(laneElement);
    lanes[laneName] = [];
    saveLanes();
});

function deleteTask(e) {
    const taskElement = e.target.closest(".task");
    const laneElement = e.target.closest("[data-lane-id]");
    const laneID = laneElement.dataset.laneId;
    lanes[laneID] = lanes[laneID].filter((task) => task.id !== taskElement.id);
    console.log(lanes);
    saveLanes();

    taskElement.remove();
}
