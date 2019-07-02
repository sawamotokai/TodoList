import React, { Component } from 'react'
import './ToDo.css';


class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            isEditted: false,
            task: this.props.task    
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.complete = this.complete.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }

    handleEdit() {
        this.setState({ ...this.state, isEditted: true });
    }

    handleChange(evt) {
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({
            ...this.state,
            isEditted: false
        });
    }

    complete() {
        this.setState({
            ...this.state,
            done: !this.state.done
        });
    }

    render() {
        return (
            <div className='ToDo'>
                {!this.state.isEditted
                    ?
                    <div>
                        <li className={this.state.done ? 'Todo-task completed':'Todo-task'} onClick={this.complete}>{this.state.task}</li>
                        <button onClick={this.handleEdit}>Edit</button>
                        <button onClick={this.handleRemove}>Remove</button>
                    </div>
                    : <form className="edit" onSubmit={this.handleSubmit}>

                            <input
                                type="text"
                                value={this.state.task}
                                onChange={this.handleChange}
                                name='task'
                            />
                        <button type="submit">SAVE</button>
                    </form>
                }
            </div>
        );
    }
}

export default ToDo;