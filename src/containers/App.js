import React, { Component } from 'react'
import {
    Container,
    Row
} from 'reactstrap'
import PerformanceTool from './PerformanceTool'

class App extends Component {
    render() {
        return (
          <Container>
            <Row>
              <div className="w-100">
                <PerformanceTool />
              </div>
            </Row>
          </Container>
        )
    }
}

export default App