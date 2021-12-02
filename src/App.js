import React, { useState } from "react";
import TodoList from "./TodoList";
const App =()=>{

    const [inputValue , setInputValue] =useState("");
    const [inputItem , setInputItem] =useState([]);
    let inputEvent =(event)=>{
        setInputValue(event.target.value)
    }

    let ListItem =()=>{
        setInputItem((oldData)=>{
            return[...oldData,inputValue]
        })
        setInputValue("")
    }
    return(
        <>
        <div className="main_div">
            <div className="content_div">
                <br />
                <h1 style={{color:'white' , backgroundColor:'aqua'}}>To Do List</h1>
                <br />
                <input style={{ height:'50px' , textAlign:'center'}} type="text" placeholder="Add an item" value={inputValue} onChange={inputEvent} />
                <button onClick={ListItem} style={{margin:'2px' , width:'40px'}}> +</button>

                {inputItem.map((itemVal)=>{return(<TodoList text={itemVal}/>)})}
                
            </div>
        </div>
        </>
    )
}

export default App;