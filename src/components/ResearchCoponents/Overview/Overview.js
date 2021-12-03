import React from "react";

import * as Utilities from '../../../services/utilities';

// reactstrap components
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Form,
    Row,
    Col
} from "reactstrap";

class Overview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overview: JSON.parse(props.overview),
        }
    }

    render() {
        return (
            <div className="overview">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Overview (polygon.io)</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row className="pr-md-1" md="12">
                                <Col className="pr-md-1" md="6">
                                    <p className="category">Name: {this.state.overview.name}</p>
                                    <p className="category">CEO: {this.state.overview.ceo}</p>
                                    <p className="category">URL: {this.state.overview.url}</p>
                                </ Col>
                                <Col className="pr-md-1" md="6">
                                    <p className="category">Market Cap: {Utilities.formatCurrency(this.state.overview.marketcap)}</p>
                                    <p className="category">Symbol: {this.state.overview.symbol}</p>
                                </ Col>
                            </ Row>
                        </ Form>
                    </CardBody>
                </Card>
            </div >
        );
    }
}

export default Overview;
