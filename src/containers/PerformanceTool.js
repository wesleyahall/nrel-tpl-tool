import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreBox from '../components/ScoreBox'
import SectionLinksWithScores from './SectionLinksWithScores'
import TopLevelSection from '../components/TopLevelSection'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class PerformanceTool extends Component {
    render() {
        return (
              <div className="PerformanceTool" style={{margin: '20px 0px'}}>
                <Container>
                    <Row>
                        <Col>
                            <ScoreBox />
                        </Col>
                        <Col>
                            <SectionLinksWithScores />
                        </Col>
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

export default connect(mapStateToProps)(PerformanceTool);