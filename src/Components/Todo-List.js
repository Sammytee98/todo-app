import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import MoveDownIcon from '@mui/icons-material/MoveDown';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [item, setItem] = useState('');


    const getInputValue = (e) => {
        const input = e.target.value;
        setItem(input);
    }

    const addTask = (event) => {
        if(item.trim() !== ''){
            setTasks(t => [...t, {text: item, checked: false}]);
            setItem('');
        }

        event.preventDefault();
    }

    const moveUp = (i) => {
        if(i > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i - 1]] = 
            [updatedTasks[i - 1], updatedTasks[i]]
            setTasks(updatedTasks);
        }
    }
    const moveDown = (i) => {
        if(i < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i + 1]] = 
            [updatedTasks[i + 1], updatedTasks[i]]
            setTasks(updatedTasks);
        }
    }

    const deleteTask = (i) => {
        setTasks(tasks.filter((_, index) => i !== index))
    }

    const editTask = (i) => {
        setItem(tasks[i].text);
        deleteTask(i);
    }

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