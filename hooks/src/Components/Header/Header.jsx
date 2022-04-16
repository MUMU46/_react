import React from 'react';

import { nanoid} from 'nanoid';

export default function  Header(props){
 
 //键盘事件的回调
 function  handleKeyUp (event){
    if(event.key!=='Enter') return
    if(event.target.value.trim()==='') return
    const todoObj = {id:nanoid(),name:event.target.value,done:false,flag:true,edit:false}
    props.addTodo(todoObj)
    event.target.value=''
  }
  function checkedAll(event){
      props.tocheckall(event.target.checked)
}

    const{todos}= props
    return (
    <div>
        <h1>todos</h1>
		    <input className="new-todo"  onKeyUp={handleKeyUp} placeholder="What needs to be done?" autoFocus/>
        <section style={{display: todos.length ? 'block' : 'none'}} className="main"> 
          <input id='toggle-all' className='toggle-all' onChange={checkedAll}type="checkbox"></input>
          <label htmlFor='toggle-all'></label>
        </section>
    </div>
    )
  }
