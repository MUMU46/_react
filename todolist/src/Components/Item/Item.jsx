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
   /*  handleEditing = (id)=>{
        this.props.Editing(id)
    } */

  render() {
    const {id,name,done,flag/* ,edit */} = this.props
    return (
    <ul className="todo-list" style={{display:flag?'block':'none'}}>
        <li className={done?'completed':''}>
            {/* <div onDoubleClick={()=>this.handleEditing(id)}> */}
           <input id="toggle" className="toggle" checked={done} onChange={this.handleCheck(id)} type="checkbox"/>
           <label htmlFor="toggle">{name}</label>
           <button className="destroy" onClick={this.handleDelete(id)}></button>
           {/* </div> */}
        </li>
    </ul>
    )
  }
}
