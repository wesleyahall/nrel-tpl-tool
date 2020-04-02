import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nrel.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <header id="banner">
        <div class="banner-logo">
            <div class="container app">
                <div class="row">

                    <div class="HeaderName col-md-6">
                        <a href="/">Technology Performance Level Assessment <br/> Wave Energy Converters</a>
                    </div>

                    <div class= "HeaderImage col-md-6 justify-content-end">
                      <img src="https://www.nrel.gov/_resources/images/nrel-logo@2x-01.png" />
                    </div>
                </div>
              </div>
            </div>
      </header>

      <div class="program-header MainNavigation">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <div id="program-menu" class="mr-auto">
              <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#topnav-collapse" aria-controls="topnav-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggle-label">Menu</span>
              </button>
            </div>
            
            <div class="navbar-collapse collapse" id="topnav-collapse">
                <ul class="nav navbar-nav">
                    <li data-topnav="link1" class="nav-item"><a href="#" class="nav-link">About</a></li>
                    <li data-topnav="link2" class="nav-item"><a href="#" class="nav-link">Definitions</a></li>

                </ul>
                <ul class="nav navbar-nav ml-auto justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Help</a></li>
                </ul>
            </div>               
          </nav>
        </div>
      </div>

              <App />

      <footer id="footer" class="hidden-print">
	    <div class="container">
	        <div class="row">
	            <div class="col-md-10 order-md-2">
	                <div class="row">
	                    <div class="col-md-2">
	                        <p class="header"><a href="/index.html">Home </a>
	                        </p>
	                    </div>
	                    <div class="col-md-8">
	                        <div class="row">
	                            <div class="col-md-12">
	                                <p class="header"><a href="/research/index.html">Research </a>
	                                </p>
	                            </div>
	                            <div class="col-md-4">
	                                <ul>
	                                    <li><a href="https://www.nrel.gov/manufacturing/">Advanced Manufacturing</a></li>
	                                    <li><a href="https://www.nrel.gov/bioenergy/">Bioenergy</a></li>
	                                    <li><a href="https://www.nrel.gov/buildings/">Buildings</a></li>
	                                    <li><a href="https://www.nrel.gov/chemistry-nanoscience/">Chemistry and Nanoscience</a></li>
	                                    <li><a href="https://www.nrel.gov/computational-science/">Computational Science</a></li>
	                                    <li><a href="https://www.nrel.gov/analysis/">Energy Analysis</a></li>
	                                </ul>
	                            </div>
	                            <div class="col-md-4">
	                                <ul>
	                                    <li><a href="https://www.nrel.gov/storage/">Energy Storage</a></li>
	                                    <li><a href="https://www.nrel.gov/esif/">Energy Systems Integration Facility</a></li>
	                                    <li><a href="https://www.nrel.gov/geothermal/">Geothermal</a></li>
	                                    <li><a href="https://www.nrel.gov/grid/">Grid Modernization</a></li>
	                                    <li><a href="https://www.nrel.gov/hydrogen/">Hydrogen and Fuel Cells</a></li>
	                                </ul>
	                            </div>
	                            <div class="col-md-4">
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
	                    <div class="col-md-2">
	                        <p class="header">Follow NREL</p>
	                        <ul class="social-links list-inline">
	                            <li class="list-inline-item"><a href="https://www.facebook.com/nationalrenewableenergylab" aria-label="Follow NREL on Facebook"><span class="fa fa-facebook-square"></span></a>
	                            </li>
	                            <li class="list-inline-item"><a href="https://www.nrel.gov/news/subscribe.html" aria-label="Subscribe to news"><span class="fa fa-envelope"></span></a>
	                            </li>
	                            <li class="list-inline-item"><a href="https://twitter.com/nrel/" aria-label="Follow NREL on Twitter"><span class="fa fa-twitter"></span></a>
	                            </li>
	                            <li class="list-inline-item"><a href="https://www.linkedin.com/company/national-renewable-energy-laboratory" aria-label="Follow NREL on Linked In"><span class="fa fa-linkedin-square"></span></a>
	                            </li>
	                            <li class="list-inline-item"><a href="https://www.youtube.com/user/NRELPR/" aria-label="Follow NREL on YouTube"><span class="fa fa-youtube"></span></a>
	                            </li>
	                            <li class="list-inline-item"><a href="https://www.instagram.com/nationalrenewableenergylab/" aria-label="Follow NREL on Instagram"><span class="fa fa-instagram"></span></a>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	            <div class="col-md-2 order-md-1 ft-border-right">
	                <div class="row">
	                    <div class="col-md-12 only-nrel">
	                        <p class="nrel-attr">The National Renewable Energy Laboratory&nbsp;is a national laboratory
	                            of the <a href="https://energy.gov/">U.S. Department of Energy</a>, <a href="https://energy.gov/eere/office-energy-efficiency-renewable-energy">Office of Energy Efficiency and Renewable Energy</a>,
	                            operated by the <a href="https://www.allianceforsustainableenergy.org/">Alliance for Sustainable Energy, LLC</a>.</p>
	                    </div>
	                    <div class="col-lg-6">
	                        <ul>
	                            <li><a href="https://www.nrel.gov/security.html">Security &amp; Privacy Policy</a></li>
	                            <li><a href="https://www.nrel.gov/accessibility.html">Accessibility</a></li>
	                            <li><a href="https://www.nrel.gov/disclaimer.html">Disclaimer</a></li>
	                            <li><a id="contact-link" href="/Users/whall/Projects/nrel-tpl-tool/docs/old-layout/contacts.html">Contact Us</a></li>
	                        </ul>
	                    </div>
	                    <div class="col-lg-6">
	                        <ul>
	                            <li><a href="https://www.nrel.gov/careers/">Apply for a Job</a></li>
	                            <li><a href="https://developer.nrel.gov/">Developers</a></li>
	                            <li><a href="https://images.nrel.gov/bp/#/">Image Gallery</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="row">
	            <div class="col-md-2 ft-border-right">
					      <a href="https://energy.gov"><img class="logo" src={require("./img/logo-doe-footer.png")} alt="U.S. Department of Energy"></img></a>
	            </div>
	        </div>
	    </div>
	</footer>
  </React.StrictMode>,
  document.getElementById('root')
)