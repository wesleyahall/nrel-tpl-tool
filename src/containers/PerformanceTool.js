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
                <Container style={{marginRight: '0'}}>
                    <Row noGutters>
                        <Col md="4">
                            <ScoreBox />
                        </Col>
                        <Col md={{size:7, offset:1 }}>
                            <SectionLinksWithScores />
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: '24px'}}>
                    <div className="Sections">
                        <Row noGutters><Col><TopLevelSection colors={['#00B5EF', '#8FE4FF', '#C8F1FE', '#EBFAFF']} sectionName="Cost Of Energy" extraClasses="Section1"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#0079C2', '#A7D9FF', '#CCE9FF', '#CCE9FF']} sectionName="Investment Opportunity" extraClasses="Section2"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#0C5C8D', '#B6D4E6', '#B6D4E6', '#EEF4F8']} sectionName="Grid Operation" extraClasses="Section3"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#707070', '#D4D4D4', '#E4E4E4', '#F5F5F5']} sectionName="Society Benefits" extraClasses="Section4"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#CE372F', '#F9C1BC', '#F6DAD8', '#F9EDED']} sectionName="Permitting &amp; Certification" extraClasses="Section5"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#F7901E', '#F7901E', '#FFE5C8', '#FFF6EC']} sectionName="Investment Opportunity" extraClasses="Section6"/></Col></Row>
                        <Row noGutters><Col><TopLevelSection colors={['#FDCE13', '#FFE785', '#FFF2C1', '#FFF9E3']} sectionName="Grid Operation" extraClasses="Section7"/></Col></Row>
                   </div>
                </Container>
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