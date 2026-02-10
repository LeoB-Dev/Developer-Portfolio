function Button({ text }) {
    return (
        <button className="pushable">
            <span className="front">
                {text}
            </span>
        </button>
    )
}

export default Button