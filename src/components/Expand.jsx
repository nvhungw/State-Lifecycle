import React from "react";

function Expand() {

    const [Open, setOpen] = React.useState(false)

    // const handleOpen = () => {
    //     setOpen(true)
    // }
    
    return(
        <>
            <h1>Conditional Rendering</h1>
            <button type='button' onClick={() => {setOpen(!Open)}}>
                {Open ? 'Close' : 'Open'}
            </button>
            {Open && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
        </>
    )
}

export default Expand