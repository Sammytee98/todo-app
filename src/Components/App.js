import React, {useState} from 'react'
import TodoList from './Todo-List'

const App = () => { 
  // State to store the list of tasks and the current input value
  const [tasks, setTasks] = useState([]);
  const [item, setItem] = useState('');

  // Function to update the input field when typing
  const getInputValue = (e) => {
      const input = e.target.value;
      setItem(input);
  }

  // Function to add a new task to the list of tasks
  const addTask = (event) => {
      event.preventDefault(); // Prevent form from reloading the page
      if(item.trim() !== ''){
          // Add new task to the list with default `checked: false`
          setTasks(t => [...t, {text: item, checked: false}]);
          setItem(''); // Clear the input field after adding
      }
  }

  // Function to move the task position up in the list
  const moveUp = (i) => {
      if(i > 0) {
          const updatedTasks = [...tasks];
          // Swap current task with the one above it
          [updatedTasks[i], updatedTasks[i - 1]] = 
          [updatedTasks[i - 1], updatedTasks[i]]
          setTasks(updatedTasks);
      }
  }

  // Function to move a task position down in the list
  const moveDown = (i) => {
      if(i < tasks.length - 1) {
          const updatedTasks = [...tasks];
          // Swap current task with the one below it
          [updatedTasks[i], updatedTasks[i + 1]] = 
          [updatedTasks[i + 1], updatedTasks[i]]
          setTasks(updatedTasks);
      }
  }

  // Function to delete a task from the list
  const deleteTask = (i) => {
      setTasks(tasks.filter((_, index) => i !== index))
  }

  // Function to edit a task (load its text into  the input field for editing)
  const editTask = (i) => {
      setItem(tasks[i].text); // Set the input value to the task text
      deleteTask(i); // Remove the task from the list while editing
  }

  // Function to mark a task as completed (toggle checkbox)
  const toggleCheck = (i) => {
      setTasks(t => t.map((task, index) => i === index ?  {...task, checked: !task.checked} : task))
  }

  return (
    <div className='App'>
      <TodoList 
        tasks={tasks}
        setTasks={setTasks}
        item={item}
        setItem={setItem}
        getInputValue={getInputValue}
        addTask={addTask}
        moveUp={moveUp}
        moveDown={moveDown}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleCheck={toggleCheck}
      />
    </div>
  );
}

export default App;
