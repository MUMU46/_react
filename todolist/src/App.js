import React, { Component } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Filter from './Components/Filter/Filter'
import List from './Components/List/List'
export default class App extends Component {

	state = {todos:[]}
//添加一个todo，接受todo对象
	addTodo = (todoObj)=>{
		const{todos} = this.state//获取原todos
		const newTodos = [todoObj,...todos]//追加todo
		this.setState({todos:newTodos})//更新
	}
//更新todo勾选状态
	changeTodo = (id,done)=>{
		const{todos}=this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id===id)
			return{...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}
//删除一个todo
	deleteTodo = (id)=>{
		const{todos}=this.state
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id!==id
		})
		this.setState({todos:newTodos})
	}

	deleteCpd = ()=>{
		const{todos}=this.state
		const newTodos = todos.filter((todoObj) => {
			return todoObj.done!==true
		})
		this.setState({todos:newTodos})
	
	}
	viewAll = ()=>{
		const{todos}=this.state
		const newTodos = todos.map((todoObj)=>{
			todoObj.flag=true
			return todoObj
		})
		this.setState({todos:newTodos})
	}
	viewActive = ()=>{
		const{todos}=this.state
		/* const newTodos = todos.filter((todoObj) => {
			return todoObj.done===false
		 }) */  //不能用筛选，返回viewall时会丢失todo
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.done===true)
			todoObj.flag=false 
			else todoObj.flag=true    //根据flag值更改样式
			return todoObj
		})
		this.setState({todos:newTodos})
	}
	viewCpd = ()=>{
		const{todos}=this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.done===false)
			todoObj.flag=false
			else todoObj.flag=true     //根据flag值更改样式
			return todoObj
		})
		this.setState({todos:newTodos})
	}
	tocheckall = (done)=>{
		const{todos}=this.state
		const newTodos = todos.map((todoObj)=>{
			return{...todoObj,done}
		})
		this.setState({todos:newTodos})
	}
	/* beEditing = (id)=>{
		const{todos}=this.state
		const newTodos = todos.map((todoObj)=>{
		if(todoObj.id===id){
			todoObj.edit = true }
			return todoObj	
		})
		this.setState({todos:newTodos})
	} */
	//css不是自己写的，实在对应不上edit的样式，函数没问题，渲染出不来

  render() {
	const {todos} = this.state
    return (
    <div className='Todo'>
		<section className="todoapp">
           	<Header todos={todos} addTodo={this.addTodo} tocheckall={this.tocheckall}/>
			<List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} /* Editing={this.beEditing} *//>
			<Filter todos={todos} viewAll={this.viewAll} viewActive={this.viewActive} deleteCpd={this.deleteCpd} viewCpd={this.viewCpd}/>
		</section>
    </div>
	)
	}
}