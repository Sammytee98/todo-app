import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import MoveDownIcon from '@mui/icons-material/MoveDown';

const TodoList = () => {
    // State to store the list of tasks
    const [tasks, setTasks] = useState([]);
    // State to store the current input value
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

    return(
        <div className='todo-content'>
            <h1>TODO LIST</h1>
            <form id='form' onSubmit={addTask}>
                <input onChange={getInputValue} 
                    type='text' 
                    value={item} 
                    placeholder="Add a new task" />

                <Fab type='submit' color='success'>
                    <AddIcon />
                </Fab>
            </form>

            <ul>
            {tasks.map((task, index) => (
                <li key={index + 1} className='task-item'>
                    <input type='checkbox' onChange={() => toggleCheck(index)} checked={task.checked}/>

                    <span className={task.checked ? 'line-through' : ''
                        }
                        onClick={() => toggleCheck(index)
                        }>
                        {task.text}
                    </span>

                    <div className='list-buttons'>
                        <button onClick={() => moveUp(index)}>
                            <MoveUpIcon /> 
                        </button>
                        <button onClick={() => moveDown(index)}>
                            <MoveDownIcon /> 
                        </button>
                        <button onClick={() => editTask(index)}>
                            <EditIcon />
                        </button>
                        <button onClick={() => deleteTask(index)}>
                            <DeleteIcon />
                        </button>
                    </div>
                </li>
            ))}
            </ul>

        </div>
    )

}

export default TodoList;