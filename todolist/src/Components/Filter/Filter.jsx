
import React, { Component } from 'react';

export default class Filter extends Component {
    state={
        isactive:false,
        isAll:true,
        iscompleted:false
        }

        sendEvent = (s) => {
            document.dispatchEvent(new CustomEvent('myEvent', {
              detail:s
            }))
        }

    handleAll = ()=>{
        this.setState({
            isAll:true,
            isactive:false,
            iscompleted:false
        })
        const s={
            isAll:true,
            isactive:false,
            iscompleted:false}
        this.props.viewAll()
        this.sendEvent(s)
    }
    handleActive = ()=>{
        this.setState({
            isAll:false,
            isactive:true,
            iscompleted:false
        })
        const s={
            isAll:false,
            isactive:true,
            iscompleted:false}
        this.props.viewActive()
        this.sendEvent(s)
    }
    clearCompleted = ()=>{
        this.props.deleteCpd()
    }
    handleCompleted = ()=>{
        this.setState({
            isactive:false,
            isAll:false,
            iscompleted:true
        })
        const s={
            isactive:false,
            isAll:false,
            iscompleted:true}
        this.props.viewCpd()
        this.sendEvent(s)
    }
  render() {
      const {todos} = this.props
      const {isactive,isAll,iscompleted} = this.state
      const undoneCount = todos.reduce((pre,todo)=>{return pre-(todo.done?1:0)},todos.length)
      const doneCount = todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    return (
         
	    <footer className="footer" style={{display:(todos.length?'block':'none')}}>
        <span className="todo-count" style={{display:(todos.length?'block':'none')}}>{undoneCount}item left</span>
                
                <ul className="filters">
                    <li>
                        <a ref = {this.all} href="#/" className={isAll?'selected':''} onClick={this.handleAll}>All</a>
                    </li>
                    <li>
                        <a ref = {this.active} className={isactive?'selected':''} onClick = {this.handleActive}href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed" className={iscompleted?'selected':''} onClick = {this.handleCompleted}>Completed</a>
                    </li>
                </ul>
               
                <button className="clear-completed" onClick={this.clearCompleted} style={{display:(doneCount?'block':'none')}} >Clear completed</button>
        </footer>
            )
    }
}
