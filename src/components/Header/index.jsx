import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar fluid collapseOnSelect className="appHeader">
          <Navbar.Header>
              <Navbar.Brand>
              <div className="brandNavbar">
                <img alt="Mr.Cooper Logo" src="../assets/images/mrcooperlogo.png" height="35"></img> /
                 Title Goes Here
              </div>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/Sample" style={{ textDecoration: 'none' }}>
                <NavItem eventKey={1} >
                  Sample
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2}>
                Username
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
