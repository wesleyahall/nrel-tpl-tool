import React, { Component } from 'react'
import '../styles/SectionLinksWithScores.css'

class SectionLinksWithScores extends Component {
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
              <div className="SectionLinksWithScores">
                  <ul>
                      <li className="Section1"><a href="#Section1">Cost of Energy</a></li>
                      <li className="Section2"><a href="#Section2">Investment Opportunity</a></li>
                      <li className="Section3"><a href="#Section3">Grid Operation</a></li>
                      <li className="Section4"><a href="#Section4">Society Benefits</a></li>
                      <li className="Section5"><a href="#Section5">Safety &amp; Function</a></li>
                      <li className="Section6"><a href="#Section6">Global Deployment</a></li>
                      <li className="Section7"><a href="#Section7">Grid Operation</a></li>
                  </ul>
              </div>
        )
    }
}

export default SectionLinksWithScores