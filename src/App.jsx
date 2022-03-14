import React, { Component } from 'react'
import "./App.css"
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {

    state = {
        todoArray: [
            {
                id: uuidv4(),
                todo: "Wash dishes"
            },
            {
                id: uuidv4(),
                todo: "Walk the dog"
            },
            {
                id: uuidv4(),
                todo: "Homework"
            }
        ],
        newTodo: "",
        error: "",
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
                    <li style={{ listStyleType: "none" }} key={ id }>{ todo }</li>
                ))}
            </ul>
        )
    }

    submitHandler = e => {
        e.preventDefault()

        const isDuplicate = this.state.todoArray.some(e => {
            return (
                e.todo.toLowerCase() === e.target.newTodo.value.toLowerCase()
            )
        })

        const isNotEmpty = e.target.newTodo.value.trim();

        if(!isNotEmpty) {
            this.setState({
                error: "Can not add an empty todo!"
            })
        }
        else {
            if(isDuplicate) {
                this.setState({
                    error: "Can not add a duplicate todo!",
                    newTodo: ""
                })
            }
            else {
                let newArray = [
                    ...this.state.todoArray,
                    { id: uuidv4(), todo: this.state.newTodo }
                ]
                this.setState({
                    todoArray: newArray,
                    newTodo: "",
                    error: ""
                })
            }
        }
    }

    render() {

        const { newTodo } = this.state

        return (
            <div className='App'>

                <form onSubmit={ this.submitHandler }>

                    <label>Add Todo: </label>
                    <input placeholder='Enter todo here' name="newTodo" value={ newTodo } onChange={ this.changeHandler } />
                    <button>Submit</button>
                    <p style={{ color: "red" }}>{ this.state.error }</p>

                </form>

                {this.showTodoArray()}

            </div>
        )

    }

}

export default App
