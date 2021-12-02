import React from "react";


const TodoList =(props)=>{
    return (<>
                <ol style={{marginTop:'10px', marginRight:'30px', listStyleType:'none'}}>
                    <li>{props.text}</li>
                </ol>
            </>)
}


export default TodoList;