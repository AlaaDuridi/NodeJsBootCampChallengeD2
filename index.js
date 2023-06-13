import express from 'express';
const app = express();
app.use(express.json());
let tasks = [];
app.post('/tasks', (req, res) => {
  // console.log("hello")
  const { name, priority, id } = req.body;
  if (!name || !priority || !id || parseInt(priority)>5 || parseInt(priority)<1  )  {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  if(tasks.find((task) => task.id === parseInt(id))){
    return res.status(400).json({ error: 'This id is occupied!' });
  }
  const task = { name, priority, id };
  tasks.push(task);
  res.status(201).json({ message: 'Task created successfully', task });
});
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  if(!parseInt(taskId) )
  {
    return res.status(400).json({ error: 'Invalid Id!' });
  }
  const { name, priority } = req.body;
  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  if (priority && parseInt(priority)<5 && parseInt(priority)>1 ) {
    task.priority = priority;
  }
  else{
    return res.status(400).json({ error: 'Invalid priority!, Priority should be between 1 and 5' });
  }
  if (name ) {
    task.name = name;
  }
  res.status(201).json({ message: 'Task updated successfully', task });
});
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const deletedTask = tasks.splice(taskIndex, 1);

  res.json({ message: 'Task deleted successfully', task: deletedTask[0] });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
