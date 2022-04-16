import React from 'react';

export default function Item (props) {

    function handleCheck(id){
        return(event)=>{
            props.changeTodo(id,event.target.checked)
        }
    }
    function handleDelete (id){
        return(event)=>{
           props.deleteTodo(id)
        }
    }
    function handleEdit (id){
        return (e) => {
            const { keyCode, target, type } = e
            if (type === 'keyup') {
                if (keyCode === 13)
                  props.beNtodo(id, target.value)
            }
            if (type === 'blur' && target.value !== 'on') {
               props.beNtodo(id, target.value)
            }
        }
    }
    function handleEditing (id){
        props.Editing(id)
    }


    const {id,name,done,flag,edit} = props
    return (
    <ul className="todo-list" style={{display:flag?'block':'none'}}>
     <li onBlur={handleEdit(id)} onKeyUp={handleEdit(id)} className={edit ? 'editing' : done ? 'completed' : ''} style={{ display: flag ? 'block' : 'none' }}>
            <div onDoubleClick={() => handleEditing(id)} className='view'>
           <input id="toggle" className="toggle" checked={done} onChange={handleCheck(id)} type="checkbox"/>
           <label htmlFor="toggle">{name}</label>
           <button className="destroy" onClick={handleDelete(id)}></button>
           </div>
           <input className='edit' />
        </li>
    </ul>
    )
  }

