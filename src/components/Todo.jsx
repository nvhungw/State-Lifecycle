import React from "react";

function TodoApp() {
    
    const [List, setList] = React.useState([])
    const [Input, setInput] = React.useState('')

    const handleSubmit = () => {
        setList ([...List, Input])
        setInput('')
        
        console.log(Input)
    }


    return(
        <>
            <h1>Todo List</h1>
            <input value={Input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {List?.map((item) => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
        </>
)

}
export default TodoApp