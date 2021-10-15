const Button = ({ className, text, onClick, index }) => {
    return (
        <button
            key={index}
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    )
};

export default Button;