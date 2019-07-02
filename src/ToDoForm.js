import React, { Component } from 'react'
import uuid from 'uuid/v4';

class ToDoForm extends Component   {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            task: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo({ ...this.state, id: uuid() });
        this.setState({ task: '' });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form className="ToDoForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="task">New Todo</label>
                    <input
                        onChange={this.handleChange}
                        name='task'
                        type='text'
                        value={this.state.task}
                        placeholder="New Todo" />
                    <button type="submit">ADD TODO</button>
                </div>
            </form>
        );
    }
}

export default ToDoForm;