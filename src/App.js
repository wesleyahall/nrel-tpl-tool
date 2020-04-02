import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class App extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
              Hello World
            </div>
        )
    }
}

export default App