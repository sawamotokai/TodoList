import React, { Component } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './ToDoList.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    removeTodo(id) {
        let tempState = this.state;
        this.setState({
            todos:tempState.todos.filter(todo=>id!==todo.id)
        })
    }

    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    editTodo(edittedTodo) {
        this.setState({
            todos: [...this.state.todos, edittedTodo]
        })
    }

    render() {
        const todos = this.state.todos.map((todo) => <ToDo task={todo.task} id={todo.id} edit={this.editTodo} remove={this.removeTodo}/>
        );

        return (
            <div className='ToDoList'>
                <h1>To Do List!
                    <span>A Simple React Todo List App</span>
                </h1>
                <div>
                    <ul>
                    {todos}
                    </ul>
                </div>
                <ToDoForm addTodo={this.addTodo}/>    
            </div>
        );
    }
}


export default ToDoList;
