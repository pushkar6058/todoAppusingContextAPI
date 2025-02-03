import { createContext, useContext } from "react";

// created the context
export const TodoContext=createContext({

    todos:[
        {
            id:1,
            todo: "learn java",
            completed: false
        },
    ],

    addTodo: (todo)=>{},
    udpatedTodo:(id,todo)=>{},
    deletedTodo:(id)=>{},
    toggleComplete: (id)=>{}

    

});


// using the context
export const useTodo=()=>{
    return useContext(TodoContext);
};

// providing context
export const TodoProvider=TodoContext.Provider;