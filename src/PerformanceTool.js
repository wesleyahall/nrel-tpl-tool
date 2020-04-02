import React, { Component } from 'react'
import ScoreBox from './ScoreBox'
import SectionLinksWithScores from './SectionLinksWithScores'
import TopLevelSection from './TopLevelSection'
import {
    Container,
    Row
} from 'reactstrap'

class PerformanceTool extends Component {
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
                <Container>
                    <Row>
                        <ScoreBox />
                        <SectionLinksWithScores />
                    </Row>
                </Container>
                <TopLevelSection className="CostOfEnergy" />
              </div>
        )
    }
}

export default PerformanceTool