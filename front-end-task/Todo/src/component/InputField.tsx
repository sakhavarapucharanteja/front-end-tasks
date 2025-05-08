import React, { useRef } from 'react'
import './style.css'

interface props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField = ({todo,setTodo,handleAdd}:props) => {
    const inputref = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputref.current?.blur();
        }} >
        <input
        ref={inputref}
        type="text" placeholder='Enter a task' className='input_box' 
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
        />
        <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default InputField;
