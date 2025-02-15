
const Button = ({ buttonIcon, action, index }) => {

    return (
        <button onClick={() => action(index)}>
            {buttonIcon} 
        </button>
    )
}

export default Button;