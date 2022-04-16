import React, { useState, useEffect }from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Filter from './Components/Filter/Filter'
import List from './Components/List/List'
export default function App (){

	const useSemiPersistentState = (key, initialState) => {
        const initTodo = JSON.parse(initialState)
        const [value, setValue] = useState(
            JSON.parse(localStorage.getItem(key)) || initTodo
        );
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);
        return [value, setValue];
    };

    const [todos, setTodos] = useSemiPersistentState("todoList", JSON.stringify([]))
	
	function joinStorage(newTodos) {
        localStorage.setItem("todoList", JSON.stringify(newTodos));
        setTodos(newTodos)
    }
//添加一个todo，接受todo对象
	function addTodo(todoObj){
		const newTodos = [todoObj,...todos]   //追加todo
	 	joinStorage(newTodos)                    //更新
	}
//更新todo勾选状态
	function changeTodo (id,done){
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id===id)
			return{...todoObj,done}
			else return todoObj
		})
		joinStorage(newTodos)
	}
//删除一个todo
	function deleteTodo (id){
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id!==id
		})
		joinStorage(newTodos)
	}

	function deleteCpd (){
		const newTodos = todos.filter((todoObj) => {
			return todoObj.done!==true
		})
		joinStorage(newTodos)
	}

	function viewAll (){
		const newTodos = todos.map((todoObj)=>{
			todoObj.flag=true
			return todoObj
		})
		setTodos(newTodos)
	}
	function viewActive (){
		/* const newTodos = todos.filter((todoObj) => {
			return todoObj.done===false
		 }) */  //不能用筛选，返回viewall时会丢失todo
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.done===true)
			todoObj.flag=false 
			else todoObj.flag=true    //根据flag值更改样式
			return todoObj
		})
		setTodos(newTodos)
	}
	function viewCpd(){
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.done===false)
			todoObj.flag=false
			else todoObj.flag=true     //根据flag值更改样式
			return todoObj
		})
		setTodos(newTodos)
	}
	function tocheckall(done){
		const newTodos = todos.map((todoObj)=>{
			return{...todoObj,done}
		})
		joinStorage(newTodos)
	}

	function beEditing (id){
		const newTodos = todos.map((todoObj)=>{
		if(todoObj.id===id){
			todoObj.edit = true }
			return todoObj	
		})
		joinStorage(newTodos)
	}
	

	function beNtodo (id, newValue) {
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                todoObj.name = newValue
                todoObj.edit = false
                return todoObj
            }
            else {
                todoObj.edit = false
                return todoObj
            }
        })
        joinStorage(newTodos)
    }
 
    return (
    <div className='Todo'>
		<section className="todoapp">
           	<Header todos={todos} addTodo={addTodo} tocheckall={tocheckall}/>
			<List todos={todos} changeTodo={changeTodo} deleteTodo={deleteTodo} Editing={beEditing} beNtodo={beNtodo}/>
			<Filter todos={todos} viewAll={viewAll} viewActive={viewActive} deleteCpd={deleteCpd} viewCpd={viewCpd}/>
		</section>
    </div>
	)
	}
