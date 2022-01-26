import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { nanoid} from 'nanoid';

export default class Header extends Component {

  //对接受的props进行：类型和必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired 
  }
 //键盘事件的回调
  handleKeyUp = (event)=>{
    if(event.key!=='Enter') return
    if(event.target.value.trim()==='') return
    const todoObj = {id:nanoid(),name:event.target.value,done:false,flag:true,edit:false}
    this.props.addTodo(todoObj)
    event.target.value=''
  }
  checkedAll=(event)=> {
      this.props.tocheckall(event.target.checked)
}
  render() {
    const{todos}=this.props
    return (
    <div>
        <h1>todos</h1>
		    <input className="new-todo"  onKeyUp={this.handleKeyUp} placeholder="What needs to be done?" autoFocus/>
        <section style={{display: todos.length ? 'block' : 'none'}} className="main"> 
          <input id='toggle-all' className='toggle-all' onChange={this.checkedAll}type="checkbox"></input>
          <label htmlFor='toggle-all'></label>
        </section>
    </div>
    )
  }
}
