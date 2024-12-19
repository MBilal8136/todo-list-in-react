
import "./Todo.css"
import { useState } from "react"
export default function Todo(){
  const [Todos , setTodos] = useState([''])
  const [newValue, setNewValue] = useState("");

  let addNewTask = ()=>{
     setTodos([...Todos , newValue])
  }

  let updateTodoValue= (event)=>{
    setNewValue(event.target.value)
  }

  
    return(
           <div>
            <input
              type="text"
             placeholder="Add Tasks" 
             className="input" 
             value={newValue} 
             onChange={updateTodoValue}
             /><br /><br />
            <button className="btn" onClick={addNewTask}>ADD TASK</button>

            <hr />
            <h4>Todo Tasks List</h4>
            
            <ul>
                {Todos.map((todos)=>(
                    <>
                  <li className="lis">{todos} </li> 
                 
                   
                   </>
                ))}
               
            </ul>

           </div>
    )
}