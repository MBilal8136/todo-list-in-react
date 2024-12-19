
import "./Todo.css"
export default function Todo(){

    return(
           <div>
            <input type="text" placeholder="Add Tasks"  className="input"/><br /><br />
            <button className="btn">ADD TASK</button>

            <hr />
            <h4>Todo Tasks List</h4>
            
            <ul></ul>

           </div>
    )
}