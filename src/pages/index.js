import React, {Component} from "react";
import {indexPage} from '../Text';
import {Container,Row,Col} from 'reactstrap';
import Navbar from "../components/Navbar/Navbar";

class Index extends Component {


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col className="px-0">
                        make order, order list
                    </Col>
                </Row>
                <Row>
                    <Col className="px-0">
                        <div className="text-center py-4">
                            <p className="lead">Cha Con ©2018 Created by Wanchalerm Suksawat</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Index;