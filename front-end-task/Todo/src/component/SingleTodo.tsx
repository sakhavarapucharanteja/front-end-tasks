import React, { useState } from 'react'
import { Todo } from './model';
import { MdDelete } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import "./style.css"

type props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}
const SingleTodo = ({todo,todos,setTodos}:props) => {

    const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id? {...todo,isDone:!todo.isDone}:todo))
    };

    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };


  return(
    <form className="todos_single">
        {
            todo.isDone?(
                <s className="todos_single--text">{todo.todo}</s>

            ):
            (
                <span className="todos_single--text">{todo.todo}</span>

            )
        }
        
        <div>
            <span className="icon" onClick={()=>handleDelete(todo.id)} ><MdDelete /></span>
            <span className="icon" onClick={()=>handleDone(todo.id)} ><MdOutlineDownloadDone /></span>

        </div>
    </form>
 ) 
  
}

export default SingleTodo
