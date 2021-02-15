import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const LINKS = [
    {
        name:'Components',
        link:'/components'
    },
    {
        name:'About',
        link:'/about'
    }
];

const Header = (props) => {
  const {login} = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Mock Interview</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="cust-header">
              <Button onClick={login} color="success">Login</Button>{' '}
            </NavItem>
            <NavItem className="cust-header">
              <Button color="info">Register</Button>{' '}
            </NavItem>
              {/* {LINKS.map(link=>
                <NavItem>
                    <NavLink href={link.link}>{link.name}</NavLink>
                </NavItem>
            )} */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
                
          {/* <NavbarText link='/login'>Button</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;