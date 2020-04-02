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
              <div>
                <PerformanceTool />
              </div>
            </Row>
          </Container>
        )
    }
}

export default App