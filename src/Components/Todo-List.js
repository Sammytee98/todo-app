import React, {useState} from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [item, setItem] = useState('');

    const getInputValue = (e) => {
        const input = e.target.value;
        setItem(input);
    }

    const addTask = () => {
        if(item.trim() !== ''){
            setTasks(t => [...t, {text: item, checked: false}]);
            setItem('');
        }
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
        <div>
            <h1>To-Do List</h1>
            <input onChange={getInputValue} 
                type='text' 
                value={item} 
                placeholder="Add a new task" />

            <button onClick={addTask}>ADD</button>

            <ul>
            {tasks.map((task, index) => (
                <li key={index + 1} className='task-item'>
                    <input type='checkbox' onChange={() => toggleCheck(index)} checked={task.checked}/>

                    <span className={task.checked ? 'line-through' : ''}>{task.text}</span>

                    <button onClick={() => moveUp(index)}>👆</button>
                    <button onClick={() => moveDown(index)}>👇</button>
                    <button onClick={() => editTask(index)}>Edit</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
            </ul>

        </div>
    )

}

export default TodoList;