<h1>node js project application todo-app, using express module</h1> 
<h2>task model <br> 
 { <br>
name: string,<br>
priority: integer from one to 5,<br>
id: integer, unique<br>
}
</h2>


<h2>challenge requirements :</h2> 
<p>the application should handle json data<br>
we have one module, tasks<br>
tasks should have POST/GET/PUT/DELETE endpoints<br>
POST/tasks should accept the following payload and store them in an array<br>
PUT/tasks/:id should accept both of the task id and the task updated data, manipulate the array to set the updated item,
 don’t allow to update the id of the item <br>
GET/tasks should return all tasks in the array<br>
GET/tasks/:id should return single task by id<br>
DELETE/tasks/:id should delete task from array<br>
validation should be applied on all endpoints</p>

<h6>demo for result with postman: </h6>
https://github.com/AlaaDuridi/NodeJsBootCampChallengeD2/assets/51034664/be6a2147-4a08-46c3-be7a-713273c28be3

