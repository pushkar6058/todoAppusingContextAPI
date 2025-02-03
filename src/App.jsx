import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{
      id:Date.now(),...todo}]);
  }


  const deletedTodo=(id)=>{

    setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!==id )))
   

  }

  const udpatedTodo=(id,todo)=>{

    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id? todo : prevTodo)));

  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? {...prevtodo ,completed: !prevtodo.completed} : prevtodo )))

  }

  useEffect(()=>{
    const alltodos =JSON.parse(localStorage.getItem(todos));

    if(alltodos && alltodos.length>0){
      setTodos(alltodos);
    }

  },[]);

  useEffect(()=>{

    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos]);

  return (
    <TodoProvider value={{todos,addTodo,deletedTodo,udpatedTodo,toggleComplete}} >
     <div>
      <div className='bg-gray-500 flex flex-col w-2/3 mx-auto'>
        <h1 className='text-4xl mt-5 '>Manage Your Todos</h1>


        <div>
          {/* todo form */}
          <TodoForm/>
        </div>


        <div className=''>
          {/* all todos go here */}
          {todos.map((todo)=>(
            <div key={todo.id}
            className='w-full'>
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>


     </div>
    </TodoProvider>
  )
}

export default App;
