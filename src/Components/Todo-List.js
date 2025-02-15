import Form from './Form';
import LineItem from './LineItem';

const TodoList = ({ tasks, item, getInputValue, addTask, moveUp, moveDown, deleteTask, editTask, toggleCheck }) => {
    

    return(
        <div className='todo-content'>
            <h1>TODO LIST</h1>
            <Form 
                addTask={addTask}
                getInputValue={getInputValue}
                item={item}
            />
            <ul>
            {tasks.map((task, index) => (
                <LineItem 
                    task={task}
                    index={index}
                    toggleCheck={toggleCheck}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
            </ul>

        </div>
    )

}

export default TodoList;