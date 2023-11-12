import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
// create top nav component
function TopNav() {
  return (
    <div className="topnav" id="dashboardTopNav">
      <div className="logoContainer" id="dashboardLogo"><span id="contextless">[CONTEXT]LESS</span><span id="education">EDUCATION</span></div>
      <ul className="list" id="topNavList">
        <li>icons</li>
        <li>icons</li>
        <li>icons</li>
      </ul>
    </div>
  );
}
// create sidebar component
function Sidebar() {
  return (
    <div className="sidebar" id="dashboardSidebar">
      <span id="dashboardTitle">Menu</span>
      <span className="menuSplit">Explore Actions</span>
      <ul className="list">
        <li>Learning</li>
        <li>Templates</li>
        <li>Projects</li>
      </ul>
      <span className="menuSplit">Contact us</span>
      <ul className="list">
        <li><FontAwesomeIcon icon={faInstagram}/></li>
        <li><FontAwesomeIcon icon={faLinkedin} /></li>
        <li><FontAwesomeIcon icon={faEnvelope} /></li>
      </ul>
      <span className="menuSplit">Account Actions</span>
      <ul className="list">
        <li>settings</li>
        <li>log out</li>
      </ul>
    </div>
  );
}
// create main display component
function MainDisplay() {
  return (
    <div className="mainDisplay" id="dashboardMainDisplay">
      Main Display
    </div>
  );
}
// full dashboard setup
function Dashboard() {
  return (
    <div className="mainPage" id="dashboardPage">
      <TopNav />
      <Sidebar />
      <MainDisplay />
    </div>
  );
}

export default Dashboard;
