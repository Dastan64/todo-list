import "./Button.scss";


function Button({ children, bgcolor, color, ...props }) {
    return (
        <button style={{ backgroundColor: bgcolor, color }} {...props} className="button" >{children}</button>
    );
}

export default Button;