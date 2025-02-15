import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Form = ({ addTask, getInputValue, item }) => {


    return (

        <form id='form' onSubmit={addTask}>
                <input onChange={getInputValue} 
                    type='text' 
                    value={item} 
                    placeholder="Add a new task" />

                <Fab type='submit' color='success'>
                    <AddIcon />
                </Fab>
            </form>

    )
}

export default Form;