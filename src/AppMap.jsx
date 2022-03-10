import React, { Component } from 'react'
import "./App.css"

export class AppMap extends Component {

    state = {
        list: [
            {
                id: 1,
                item: 'toilet paper'
            },
            {
                id: 2,
                item: 'paper towels'
            },
            {
                id:3,
                item: 'dish soap'
            }
        ]
    }

    showItemList = () => {
        return (
            <ul>
                {this.state.list.map(({ id, item }) => (
                    <li key={ id }>{ item }</li>
                ))}
            </ul>
        )
    }

    render() {
        return (

        <div className="App">

            <h1>Hello World!</h1>
            <p>We're going to MAP data</p>

            <ul>

                {/* Normal map */}
                { this.state.list.map(e => {
                    return <li key={ e.id }>{ e.item }</li>
                }) }

                <br/><br/><p>-----------------------------------------------</p><br/><br/>

                {/* Map with destructuring */}
                { this.state.list.map(({ id, item }) => {
                    return <li key={ id }>{ item }</li>
                }) }

                <br/><br/><p>-----------------------------------------------</p><br/><br/>

                {/* Implicit return */}
                { this.state.list.map(({ id, item }) => (
                    <li key={ id }>{ item }</li>
                ))}

                <br/><br/><p>-----------------------------------------------</p><br/><br/>

            </ul>

                {/* Using function */}
                { this.showItemList() }

                <br/><br/><p>-----------------------------------------------</p><br/><br/>

        </div>

        )
    }
}

export default AppMap
