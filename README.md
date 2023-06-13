 node js project application todo-app, using express module
task model
{
name: string,
priority: integer from one to 5,
id: integer, unique
}

challenge requirements : 
the application should handle json data
we have one module, tasks
tasks should have POST/GET/PUT/DELETE endpoints
POST/tasks should accept the following payload and store them in an array
PUT/tasks/:id should accept both of the task id and the task updated data, manipulate the array to set the updated item, don’t allow to update the id of the item
GET/tasks should return all tasks in the array
GET/tasks/:id should return single task by id
DELETE/tasks/:id should delete task from array
validation should be applied on all endpoints

demo for result with postman: 


https://github.com/AlaaDuridi/NodeJsBootCampChallengeD2/assets/51034664/03cdb29a-5a9d-49bc-8d18-02c7ea8a399d

