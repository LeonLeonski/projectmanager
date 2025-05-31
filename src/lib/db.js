import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";
import { get } from "svelte/store";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("project_manager"); // select database

async function getProjects() {
  let projects = [];
  try {
    const collection = db.collection("projects");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    projects = await collection.find(query).toArray();
    projects.forEach((project) => {
      project._id = project._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    
  }
  return projects;
}

async function getTasks() {
  let tasks = [];
  try {
    const collection = db.collection("tasks");
    const query = {};
    tasks = await collection.find(query).toArray();
    tasks.forEach((task) => {
      task._id = task._id.toString();
      console.log(task._id) 
    });
  } catch (error) {
    console.log(error);
  }
  return tasks;
}


async function getTasksByProjectId(projectId) {
  let tasks = [];
  try {
    const collection = db.collection("tasks");

    const query = { projectId: projectId }; 

    tasks = await collection.find(query).toArray();

    tasks.forEach((task) => {
      task._id = task._id.toString();
      console.log(task._id);
    });

  } catch (error) {
    console.log(error);
  }

  return tasks;
}



async function getProject(id) {
  let project = null;
  try {
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) };
    project = await collection.findOne(query);
    if (!project) {
      console.log("No project with id " + id);
    } else {
      console.log("Project with id " + id + " has been found.");
      project._id = project._id.toString();
    }
  } catch (error) {
    console.log("Error while getting project with id " + id);
    console.log(error.message);
  }
  console.log("Project: ", project);
  return project;
}

async function getTask(id) {
  let task = null;
  try {
    const collection = db.collection("tasks");
    const query = { _id: new ObjectId(id) };
    task = await collection.findOne(query);
    if (!task) {
      console.log("No task with id " + id);
    } else {
      console.log("Task with id " + id + " has been found.");
      task._id = task._id.toString();
    }
  } catch (error) {
    console.log("Error while getting task with id " + id);
    console.log(error.message);
  }
  console.log("Task: ", task);
  return task;
}


async function createProject(project) {
  project.title = project.title;
  project.description = project.description || ""; 
  try {
    const collection = db.collection("projects");
    const result = await collection.insertOne(project);
    return result.insertedId.toString();
  } catch (error) {
    
    console.log(error.message);
  }
  return null;
}


async function createTask(task) {
  task.title = task.title;
  task.description = task.description || "";
  task.impactLevel = task.impactLevel || "mittel";
  task.completed = !!task.completed;
  task.dueDate = task.dueDate ? new Date(task.dueDate) : null;
  task.createdAt = task.createdAt || new Date();

  try {
    const collection = db.collection("tasks");
    const result = await collection.insertOne(task);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }

  return null;
}


async function deleteProject(id) {
  try {
    const collection = db.collection("projects");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No project with id " + id);
    } else {
      console.log("Project with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    
    console.log(error.message);
  }
  return null;
}



async function updateTask(id, data) {
  try {
    const collection = db.collection("tasks");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
    console.log("Task " + id + " wurde aktualisiert.");
  } catch (error) {
    console.log("Fehler beim Aktualisieren von Task " + id);
    console.log(error.message);
  }
}


export default {
  getProjects,
  getTasks,
  getProject,
  createProject,
  createTask,
  deleteProject,
  getTasksByProjectId,
  getTask,
  updateTask
};
