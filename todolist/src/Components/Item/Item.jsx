import React, { Component } from 'react';

export default class Item extends Component {

    handleCheck = (id)=>{
        return(event)=>{
            this.props.changeTodo(id,event.target.checked)
        }
    }
    
    handleDelete = (id)=>{
        return(event)=>{
            this.props.deleteTodo(id)
        }
    }
    handleEdit = (id) => {
        return (e) => {
            const { keyCode, target, type } = e
            if (type === 'keyup') {
                if (keyCode === 13)
                    this.props.beNtodo(id, target.value)
            }
            if (type === 'blur' && target.value !== 'on') {
                this.props.beNtodo(id, target.value)
            }
        }
    }
    handleEditing = (id)=>{
        this.props.Editing(id)
    }

  render() {
    const {id,name,done,flag,edit} = this.props
    return (
    <ul className="todo-list" style={{display:flag?'block':'none'}}>
     <li onBlur={this.handleEdit(id)} onKeyUp={this.handleEdit(id)} className={edit ? 'editing' : done ? 'completed' : ''} style={{ display: flag ? 'block' : 'none' }}>
            <div onDoubleClick={() => this.handleEditing(id)} className='view'>
           <input id="toggle" className="toggle" checked={done} onChange={this.handleCheck(id)} type="checkbox"/>
           <label htmlFor="toggle">{name}</label>
           <button className="destroy" onClick={this.handleDelete(id)}></button>
           </div>
           <input className='edit' />
        </li>
    </ul>
    )
  }
}
