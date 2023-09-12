const express = require('express');
const app = express();
const pool = require('./db/db.js');

app.use(express.json());

// Create a todo
app.post('/todos', async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (t_title, t_date, t_description) VALUES ($1, $2, $3)',
      [title, date, description]
    );
    res.send('Todo has been added into DB').status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Get all todos
app.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo ORDER BY t_id');
    res.send(allTodos.rows).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const todo = await pool.query(
      'SELECT * FROM todo WHERE t_id = $1',
      [id]
    );
    res.send(todo.rows[0]).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET t_title = $1, t_date = $2, t_description = $3 WHERE t_id = $4',
      [title, date, description, id]
    );
    res.send('Todo has been updated').status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
})

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      'DELETE FROM todo WHERE t_id = $1',
      [id]
    );
    res.send('Todo has been deleted').status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Todo app listening on port 3000');
});