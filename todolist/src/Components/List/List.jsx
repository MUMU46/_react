import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item/Item'

export default class List extends Component {

    
     //对接受的props进行：类型和必要性的限制
  static propTypes = {
    todos:PropTypes.array.isRequired,
    changeTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  render() {
    const {todos,changeTodo,deleteTodo,Editing} = this.props
    return (
        <div style={{display: todos.length ? 'block' : 'none'}} className="main"> 
            {  todos.map((todo) => {
                return  <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo} Editing={Editing}/>
            })}
            
	    </div>
        )
    }
}
