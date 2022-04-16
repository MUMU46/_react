import React from 'react';
import Item from '../Item/Item'

export default function List(props){

    

    const {todos,changeTodo,deleteTodo,Editing, beNtodo} = props
    return (
        <div style={{display: todos.length ? 'block' : 'none'}} className="main"> 
            {  todos.map((todo) => {
                return  <Item key={todo.id} {...todo} changeTodo={changeTodo}  beNtodo={beNtodo} deleteTodo={deleteTodo} Editing={Editing}/>
            })}
            
	    </div>
        )
    }

