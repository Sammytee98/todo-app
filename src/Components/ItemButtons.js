import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import Button from './Button';
const ItemButtons = ({ index, moveUp, moveDown, editTask, deleteTask }) => {

    return (
        <div className='list-buttons'>
            <Button 
                buttonIcon={<MoveUpIcon />}
                action={moveUp}
                index={index}
            />
            <Button 
                buttonIcon={<MoveDownIcon />}
                action={moveDown}
                index={index}
            />
            <Button 
                buttonIcon={<EditIcon />}
                action={editTask}
                index={index}
            />
            <Button 
                buttonIcon={<DeleteIcon />}
                action={deleteTask}
                index={index}
            />
        </div>
    )
}
export default ItemButtons;