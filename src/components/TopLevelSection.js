import React, { Component } from 'react'


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
              <div>
                  TopLevelSection Component
              </div>
        )
    }
}

export default TopLevelSection