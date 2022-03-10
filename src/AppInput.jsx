import React, { Component } from 'react'
import "./App.css";

export class AppInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      firstName: "",
      lastName: ""
    }
  }

  changeHandlerEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  changeHandlerFirstName = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  changeHandlerLastName = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  // onSubmit Version
  submitHandler = e => {
    e.preventDefault()
  }

  // onClick Version
  onClickHandler = () => {

  }

  // Handles all changes
  changeHandlerAll = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='App'>

        <label>Email: </label>
        <input onChange={ this.changeHandlerEmail } name="email" value={ this.state.email } />
        <p>{ this.state.email }</p>

        <br/><br/><p>-----------------------------------------------</p><br/><br/>

      {/* onSubmit Version */}
        <form onSubmit={ this.submitHandler }>
          <label>First Name: </label>
          <input name="firstName" value={ this.state.firstName } onChange={ this.changeHandlerFirstName } />
          <button>Submit</button>
        </form>

      {/* onClick Version */}
      <label>Last Name: </label>
      <input name="lastName" value={ this.state.value } onChange={ this.changeHandlerLastName } />
      <button onClick={ this.onClickHandler }>Submit</button>

      <br/><br/><p>-----------------------------------------------</p><br/><br/>

      {/* One onChange for input */}
      <form onSubmit={ this.submitHandler }>
        <label>Email: </label>
        <input name="email" value={ this.state.email } onChange={ this.changeHandlerAll } /><br/>
        <p>Email is: { this.state.email }</p><br/>
        <label>First Name: </label>
        <input name="firstName" value={ this.state.firstName } onChange={ this.changeHandlerAll } /><br/>
        <p>First Name is: { this.state.firstName }</p><br/>
        <label>Last Name: </label>
        <input name="lastName" value={ this.state.lastName } onChange={ this.changeHandlerAll } /><br/>
        <p>Last Name is: { this.state.lastName }</p><br/>
        <button>Submit</button>
      </form>

      <br/><br/><p>-----------------------------------------------</p><br/><br/>

      </div>
    )
  }
}

export default AppInput
