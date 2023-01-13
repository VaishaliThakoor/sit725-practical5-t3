let client = require("../dbConnect")
let projectsCollection;

setTimeout(() => {
    projectsCollection = client.mongoClient.db().collection("projects");
}, 2000)

// insert project
const insertProjects = (project, callback) => {
    projectCollection.insert(project, callback);
}

// get project...​
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = { insertProjects, getProjects }