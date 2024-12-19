
import "./Todo.css"
import { useState } from "react"
export default function Todo(){
  const [Todos , setTodos] = useState(['simple'])
    return(
           <div>
            <input type="text" placeholder="Add Tasks"  className="input"/><br /><br />
            <button className="btn">ADD TASK</button>

            <hr />
            <h4>Todo Tasks List</h4>
            
            <ul>
                {Todos.map((todos)=>(
                  <li>{todos}</li>
                ))}
            </ul>

           </div>
    )
}