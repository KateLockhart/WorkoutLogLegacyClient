import React from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default class Sitebar extends React.Component {
    render() {
        return (
            <Navbar color='faded' light expand='md'>
                <NavbarBrand href='/'>Workout Log</NavbarBrand>
            </Navbar>
        )
    }
}
