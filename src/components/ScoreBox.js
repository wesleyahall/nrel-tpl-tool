import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Progress } from 'reactstrap'
import '../styles/ScoreBox.css'

class ScoreBox extends Component {

    render() {
        const borderSize = (this.props.overall_progress === 0)  ? '1px solid #000' : 0;
        const styles = {
            border: borderSize
        }
        return (
            <section className="ScoreBox">
                <h2>Current TPL <br/> Score: <span id="OverallScore">{this.props.tpl_score}</span></h2>
                <div className="ScoreBox__Legend">
                    TPL Scoring <br/>
                    Low: 0-3&nbsp;&nbsp;Medium: 4-6&nbsp;&nbsp;High: 7-9
                </div>
                <div className="ScoreBox__ProgressBar">
                    <Row>
                        <Col md="3" className="align-right">
                            Progress
                        </Col>
                        <Col md="9">
                            <div className="ProgressBar" style={styles}>
                                <Progress animated className="OverallProgress" value={this.props.overall_progress}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tpl_score: state.tpl_score,
        overall_progress: state.overall_progress
    }
}

export default connect(mapStateToProps)(ScoreBox);