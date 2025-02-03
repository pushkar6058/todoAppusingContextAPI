import React, { useState } from 'react'
import { TodoContext, useTodo } from '../contexts/TodoContext';

function TodoForm() {

    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault()
        if(!todo)return;
        addTodo({id:Date.now(),todo:todo, completed:false});
        setTodo("");
    }



  return (
    <form className=' flex mt-10' 
    onSubmit={add}
    >

    <input 
    type="text"
    placeholder='Add your todo here....'
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
    className="w-full border border-white rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
    />

    <button
    type="submit" 
    className="bg-green-600 hover:bg-red-600 cursor-pointer mx-5  "
    
    >
    Add</button>



    </form>
  )
}

export default TodoForm;