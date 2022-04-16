
import React, { useState } from 'react';

export default function  Filter(props) {
    
    
const {todos} = props
const [isAll,setIsAll] = useState(false)
const [isactive,setIsactive] = useState(false)
const [iscompleted,setIscompleted] = useState(false)

    function handleAll (){
       setIsAll(true) 
       setIscompleted(false)
       setIsactive(false)  
        props.viewAll()
    }

    function handleActive (){
        setIsactive(true)    
        setIsAll(false)
        setIscompleted(false)
        props.viewActive()
    }

    function clearCompleted (){
       props.deleteCpd()
    }

    function handleCompleted (){
        setIscompleted(true)
        setIsactive(false) 
        setIsAll(false)
        props.viewCpd()
    }

     
      const undoneCount = todos.reduce((pre,todo)=>{return pre-(todo.done?1:0)},todos.length)
      const doneCount = todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    return (
         
	    <footer className="footer" style={{display:(todos.length?'block':'none')}}>
        <span className="todo-count" style={{display:(todos.length?'block':'none')}}>{undoneCount}item left</span>
                
                <ul className="filters">
                    <li>
                        <a href="#/" className={isAll?'selected':''} onClick={handleAll}>All</a>
                    </li>
                    <li>
                        <a  className={isactive?'selected':''} onClick = {handleActive} href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed" className={iscompleted?'selected':''} onClick = {handleCompleted}>Completed</a>
                    </li>
                </ul>
               
                <button className="clear-completed" onClick={clearCompleted} style={{display:(doneCount?'block':'none')}} >Clear completed</button>
        </footer>
            )
    }

