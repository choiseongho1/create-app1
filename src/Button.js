import propTypes from "prop-types" ;

function Button({text}){
    return <button>{text}</button>
}

Button.propttype = {
    text : propTypes.string.isRequired,
}
export default Button;