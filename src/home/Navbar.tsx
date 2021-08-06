import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    Collapse
} from 'reactstrap';

export default class Sitebar extends React.Component {
    // Need to construct and implement constructor with props and such as well as pass props to component

    toggle = () => {
        // let newIsOpen = !isOpen;
        // setIsOpen(newIsOpen);
    }

    render() {
        return (
            <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            {/*Collapse needs the isOpen={isOpen} functionality but with this. */}
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/* Button needs onClick={this.props.clickLogout} logic once named/typed/passed from App.tsx */}
                        <Button >Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
    };
};
