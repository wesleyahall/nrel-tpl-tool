import React, { Component } from 'react'
import {Col} from 'reactstrap'

class TopLevelSection extends Component {
    constructor (props) {
        super(props)
        this.state = {
            licenseSettings: null,
            infile: null,
            settings: null,
            items: null,
            catalogItems: null,
            signature: null,
            scanMode: null,
            scanCount: null,
            itemsChanged: null,
            isFinishedLoading: false
        }
    }

    render() {
        return (
              <Col>
                  TopLevelSection Component
              </Col>
        )
    }
}

export default TopLevelSection