import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreBox from '../components/ScoreBox'
import SectionLinksWithScores from './SectionLinksWithScores'
import TopLevelSection from '../components/TopLevelSection'
import {
    Container,
    Row
} from 'reactstrap'

import { sayHello } from '../actions'


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
                        <div onClick={this.props.sayHello}>TEST</div>
                        <ScoreBox />
                        <SectionLinksWithScores />
                    </Row>
                </Container>
                <TopLevelSection className="CostOfEnergy" />
              </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tpl_score: state.tpl_score
    }
}

export default connect(mapStateToProps, {sayHello})(PerformanceTool);