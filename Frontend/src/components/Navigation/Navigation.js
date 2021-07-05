import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faGlobeEurope, faMoneyBillAlt, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import Summary from "./Header"

const tabs  = [{
  route: "/home2",
  icon: faHome,
  
}, {
  route: "/Wavemain",
  icon: faMapMarkerAlt

}, {
  route: "/map",
 icon: faGlobeEurope

}, {
  route: "/BudgetPlaner",
  icon: faMoneyBillAlt
 
}, {
  route: "/list",
  icon: faSuitcase

}

]

const Navigation = (props) => {
  return (
    <div>
      
  
  
  <div className="navbar fixed-top navbar-light d-block">
  <Summary/>
  </div>



      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="3x" icon={tab.icon} color="white"/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    </div>
  )
};

export default Navigation








