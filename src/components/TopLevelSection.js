import React, { Component } from 'react'
import {Row, Col, Progress} from 'reactstrap'
import { connect } from 'react-redux'
import '../styles/TopLevelSection.css'
import {increaseScore} from '../actions'

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
        const classNames = 'TopLevelSection ' + this.props.extraClasses
        const bgColor = (this.props.colors) ? this.props.colors[1] : '#C0C0C0'
        return (
            <div id={this.props.extraClasses} className={classNames} style={{backgroundColor: bgColor}} >
                <Row>
                    <Col md="2"><h3><a href="#" onClick={this.props.increaseScore}>{this.props.sectionName}</a></h3></Col>
   
                    <Col md="4">
                        <div className="ProgressBar">
                            Progress <Progress animated className="OverallProgress" value={this.props.overallProgress}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tplScore: state.tpl_score,
        overallProgress: state.overall_progress
    }
  }

export default connect(mapStateToProps, {increaseScore})(TopLevelSection)
