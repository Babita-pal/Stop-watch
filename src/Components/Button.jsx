



// function Button ({text,handleClick}){

//     return(
//         <button onClick={handleClick}  className='border border-black rounded-md p-2 bg-pink-500'>{text}</button >

//     )
// }
// export default Button;

function Button({ text, handleClick, className }) {
    return (
        <button onClick={handleClick} className={className}>
            {text}
        </button>
    );
}

export default Button;
