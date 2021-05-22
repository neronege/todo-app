import  React, {useState} from "react";
import './Form.css'

const Form = () =>{
const [plan,setPlan] = useState("");
const [todos,setTodos] = useState([]);
  
 const addItem = (event) => {
  event.preventDefault();
  setTodos(prevTodos => [
    ...prevTodos,{id: todos.length, item:plan}
  ]);
  setPlan("");
 }
 
 
  const clearAll =() =>{
         setTodos([]);
 }
 
 
 const deleteItem = (index) => {
 const newArray =todos.splice(index,(todos.length-1));
 setTodos(newArray)

  
};
   return(
    <React.Fragment>
          to do App
           <p>New Task</p>
             <div className="todo">
              
              <input type="text" placeholder="Type a new Task" value={plan} name="todo"
                onChange={(event)=> setPlan(event.target.value)}></input>
              
                 <button type="submit" onClick= {addItem}>+</button>
          </div>
               <div className="todo-1">
              
                 <p >Task List</p> <button onClick={clearAll}>Delete All</button>
          </div>
                <ul class="list">
                 { 
                   todos.map(todo =>(
                   <li className="list-item" key={todo.id}>
                  
                   <span> {todo.item} </span>
                  
                   <button type="button" onClick={deleteItem}>X</button>
                    </li>
                     ))
                     
                  }
                    
               </ul>
   </React.Fragment>
)
 }
  export default Form;