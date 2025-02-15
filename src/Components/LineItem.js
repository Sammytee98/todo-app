import ItemButtons from './ItemButtons';

const LineItem = ({ task, index, toggleCheck, moveUp, moveDown, deleteTask, editTask }) => {

    return (
        <li key={index + 1} className='task-item'>
            <input type='checkbox' onChange={() => toggleCheck(index)} checked={task.checked}/>

            <span className={task.checked ? 'line-through' : ''
                }
                onClick={() => toggleCheck(index)
                }>
                {task.text}
            </span>
            <ItemButtons 
                index={index}
                moveUp={moveUp}
                moveDown={moveDown}
                editTask={editTask}
                deleteTask={deleteTask}
            />
        </li>
    )
}

export default LineItem;