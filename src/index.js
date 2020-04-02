import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/nrel.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={Store}>
      <header id="banner">
        <div className="banner-logo">
            <div className="container app">
                <div className="row">

                    <div className="HeaderName col-md-6">
                        <a href="/">Technology Performance Level Assessment Wave Energy Converters</a>
                    </div>

                    <div className= "HeaderImage col-md-6 justify-content-end">
                      <img src="https://www.nrel.gov/_resources/images/nrel-logo@2x-01.png" />
                    </div>
                </div>
              </div>
            </div>
      </header>

      <div className="program-header MainNavigation">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <div id="program-menu" className="mr-auto">
              <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#topnav-collapse" aria-controls="topnav-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggle-label">Menu</span>
              </button>
            </div>
            
            <div className="navbar-collapse collapse" id="topnav-collapse">
                <ul className="nav navbar-nav">
                    <li data-topnav="link1" className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li data-topnav="link2" className="nav-item"><a href="#" className="nav-link">Definitions</a></li>

                </ul>
                <ul className="nav navbar-nav ml-auto justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Help</a></li>
                </ul>
            </div>               
          </nav>
        </div>
      </div>

      <App />

      <footer id="footer" className="hidden-print">
	    <div className="container">
	        <div className="row">
	            <div className="col-md-10 order-md-2">
	                <div className="row">
	                    <div className="col-md-2">
	                        <p className="header"><a href="/index.html">Home </a>
	                        </p>
	                    </div>
	                    <div className="col-md-8">
	                        <div className="row">
	                            <div className="col-md-12">
	                                <p className="header"><a href="/research/index.html">Research </a>
	                                </p>
	                            </div>
	                            <div className="col-md-4">
	                                <ul>
	                                    <li><a href="https://www.nrel.gov/manufacturing/">Advanced Manufacturing</a></li>
	                                    <li><a href="https://www.nrel.gov/bioenergy/">Bioenergy</a></li>
	                                    <li><a href="https://www.nrel.gov/buildings/">Buildings</a></li>
	                                    <li><a href="https://www.nrel.gov/chemistry-nanoscience/">Chemistry and Nanoscience</a></li>
	                                    <li><a href="https://www.nrel.gov/computational-science/">Computational Science</a></li>
	                                    <li><a href="https://www.nrel.gov/analysis/">Energy Analysis</a></li>
	                                </ul>
	                            </div>
	                            <div className="col-md-4">
	                                <ul>
	                                    <li><a href="https://www.nrel.gov/storage/">Energy Storage</a></li>
	                                    <li><a href="https://www.nrel.gov/esif/">Energy Systems Integration Facility</a></li>
	                                    <li><a href="https://www.nrel.gov/geothermal/">Geothermal</a></li>
	                                    <li><a href="https://www.nrel.gov/grid/">Grid Modernization</a></li>
	                                    <li><a href="https://www.nrel.gov/hydrogen/">Hydrogen and Fuel Cells</a></li>
	                                </ul>
	                            </div>
	                            <div className="col-md-4">
	                                <ul>
	                                    <li><a href="https://www.nrel.gov/materials-science/">Materials Science</a></li>
	                                    <li><a href="https://www.nrel.gov/solar/">Solar</a></li>
	                                    <li><a href="https://www.nrel.gov/transportation/">Transportation</a></li>
	                                    <li><a href="https://www.nrel.gov/water/">Water</a></li>
	                                    <li><a href="https://www.nrel.gov/wind/">Wind</a></li>
	                                </ul>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-md-2">
	                        <p className="header">Follow NREL</p>
	                        <ul className="social-links list-inline">
	                            <li className="list-inline-item"><a href="https://www.facebook.com/nationalrenewableenergylab" aria-label="Follow NREL on Facebook"><span className="fa fa-facebook-square"></span></a>
	                            </li>
	                            <li className="list-inline-item"><a href="https://www.nrel.gov/news/subscribe.html" aria-label="Subscribe to news"><span className="fa fa-envelope"></span></a>
	                            </li>
	                            <li className="list-inline-item"><a href="https://twitter.com/nrel/" aria-label="Follow NREL on Twitter"><span className="fa fa-twitter"></span></a>
	                            </li>
	                            <li className="list-inline-item"><a href="https://www.linkedin.com/company/national-renewable-energy-laboratory" aria-label="Follow NREL on Linked In"><span className="fa fa-linkedin-square"></span></a>
	                            </li>
	                            <li className="list-inline-item"><a href="https://www.youtube.com/user/NRELPR/" aria-label="Follow NREL on YouTube"><span className="fa fa-youtube"></span></a>
	                            </li>
	                            <li className="list-inline-item"><a href="https://www.instagram.com/nationalrenewableenergylab/" aria-label="Follow NREL on Instagram"><span className="fa fa-instagram"></span></a>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <div className="col-md-2 order-md-1 ft-border-right">
	                <div className="row">
	                    <div className="col-md-12 only-nrel">
	                        <p className="nrel-attr">The National Renewable Energy Laboratory&nbsp;is a national laboratory
	                            of the <a href="https://energy.gov/">U.S. Department of Energy</a>, <a href="https://energy.gov/eere/office-energy-efficiency-renewable-energy">Office of Energy Efficiency and Renewable Energy</a>,
	                            operated by the <a href="https://www.allianceforsustainableenergy.org/">Alliance for Sustainable Energy, LLC</a>.</p>
	                    </div>
	                    <div className="col-lg-6">
	                        <ul>
	                            <li><a href="https://www.nrel.gov/security.html">Security &amp; Privacy Policy</a></li>
	                            <li><a href="https://www.nrel.gov/accessibility.html">Accessibility</a></li>
	                            <li><a href="https://www.nrel.gov/disclaimer.html">Disclaimer</a></li>
	                            <li><a id="contact-link" href="/Users/whall/Projects/nrel-tpl-tool/docs/old-layout/contacts.html">Contact Us</a></li>
	                        </ul>
	                    </div>
	                    <div className="col-lg-6">
	                        <ul>
	                            <li><a href="https://www.nrel.gov/careers/">Apply for a Job</a></li>
	                            <li><a href="https://developer.nrel.gov/">Developers</a></li>
	                            <li><a href="https://images.nrel.gov/bp/#/">Image Gallery</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div className="row">
	            <div className="col-md-2 ft-border-right">
					      <a href="https://energy.gov"><img className="logo" src={require("./img/logo-doe-footer.png")} alt="U.S. Department of Energy"></img></a>
	            </div>
	        </div>
	    </div>
	</footer>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)