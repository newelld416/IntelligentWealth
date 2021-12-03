import React from "react";

import classnames from "classnames";

import * as Utilities from '../../../services/utilities';

// reactstrap components
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Form,
    Row,
    Col
  } from "reactstrap";

class AnnualFinancials extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        
        this.state = {
            currentActiveTab: "0",
            symbol: props.balanceSheet ? JSON.parse(props.balanceSheet).symbol : null,
            annualReports: props.balanceSheet ? JSON.parse(props.balanceSheet).annualReports : null,
            quarterlyReports: props.balanceSheet ? JSON.parse(props.balanceSheet).quarterlyReports : null
        }
    }

    toggle = (currentActiveTab) => {
        this.setState({ currentActiveTab: currentActiveTab });
    }

    render() {
        let tabs = null;
        let content = null;

        if (this.state.annualReports) {
            tabs = this.state.annualReports.map((annualReport, index) =>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.currentActiveTab === index.toString() })} onClick={() => { this.toggle(index.toString()); }}>
                        {Utilities.formatYearFromDate(annualReport.fiscalDateEnding)}
                    </NavLink>
                </NavItem>
            );

            content = this.state.annualReports.map((annualReport, index) =>
                <TabPane tabId={index.toString()}>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row className="pr-md-1" md="12">
                                    <Col className="pr-md-1" md="6">
                                        <p className="category">Total Assets: {Utilities.formatCurrency(annualReport.totalAssets)}</p>
                                        <p className="category">Total Current Assets: {Utilities.formatCurrency(annualReport.totalCurrentAssets)}</p>
                                        <p className="category">Inventory: {Utilities.formatCurrency(annualReport.inventory)}</p>
                                        <p className="category">Investments: {Utilities.formatCurrency(annualReport.investments)}</p>
                                    </ Col>
                                    <Col className="pr-md-1" md="6">
                                        <p className="category">Total Liabilities: {Utilities.formatCurrency(annualReport.totalLiabilities)}</p>
                                        <p className="category">Total Current Liabilities: {Utilities.formatCurrency(annualReport.totalCurrentLiabilities)}</p>
                                        <p className="category">Current Debt: {Utilities.formatCurrency(annualReport.currentDebt)}</p>
                                        <p className="category">Short Term Debt: {Utilities.formatCurrency(annualReport.shortTermDebt)}</p>
                                        <p className="category">Long Term Debt: {Utilities.formatCurrency(annualReport.longTermDebt)}</p>
                                    </ Col>
                                </ Row>
                            </ Form>
                        </CardBody>
                    </Card>
                </TabPane>
            );
        }

        return (
            <div className="annual-financials">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Annual Financials (alphavantage.co) </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Nav tabs>
                            {tabs}
                        </Nav>
                        <TabContent activeTab={this.state.currentActiveTab}>
                            {content}
                        </TabContent>
                    </CardBody>
                </Card>
                
            </div >
        );
    }
}

export default AnnualFinancials;
