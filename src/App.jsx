import React, { Component } from 'react'
import "./App.css"

export class App extends Component {

    state = {
        todoArray: [
            {
                id: 1,
                todo: "Wash dishes"
            },
            {
                id: 2,
                todo: "Walk the dog"
            },
            {
                id: 3,
                todo: "Homework"
            }
        ],
        newTodo: ""
    }

    changeHandler = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    showTodoArray = () => {
        return (
            <ul>
                { this.state.todoArray.map(({id, todo}) => (
                    <li key={ id }>{ todo }</li>
                ))}
            </ul>
        )
    }

    submitHandler = e => {
        e.preventDefault()
        let newArray = [
            ...this.state.todoArray,
            { id: this.state.todoArray.length + 1, todo: this.state.newTodo }
        ]
        this.setState({
            todoArray: newArray
        })
    }

    render() {

        const { newTodo } = this.state

        return (
            <div className='App'>

                <form onSubmit={ this.submitHandler }>

                    <label>Add Todo: </label>
                    <input name="newTodo" value={ newTodo } onChange={ this.changeHandler } />
                    <button>Submit</button>

                </form>

                {this.showTodoArray()}

            </div>
        )
    }
}

export default App
