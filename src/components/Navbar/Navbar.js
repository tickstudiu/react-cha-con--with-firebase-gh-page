import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Badge } from 'antd';
import logo from '../../assets/images/logo.jpg';

export default class NavbarIndex extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/" className="text-uppercase d-flex justify-content-between align-items-center" style={{ width: '55vw' }}>
                        <img src={logo} className="rounded-circle mr-2 d-md-none" style={{ width: '32px', height: '32px' }} />
                        <span>Cha Con</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <hr className="text-dark"/>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Order</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Queue{' '}<Badge count={25} /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}