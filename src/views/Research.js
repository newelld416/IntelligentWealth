/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

//Services
import Polygon from 'services/polygon';
import Alpha from "services/alpha";

//Components
import AnnualFinancials from "components/ResearchCoponents/AnnualFinancials/AnnualFinacials";
import Overview from "components/ResearchCoponents/Overview/Overview";

class Research extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.getDetails = this.getDetails.bind(this);

    this.polygonService = new Polygon();
    this.alphaService = new Alpha();

    var urlParams = new URLSearchParams(window.location.search);
    this.state = {
      isLoading: true,
      ticker: urlParams.get('ticker') || ''
    }
  }

  handleChange(event) {
    this.setState({ ticker: event.target.value.toUpperCase() });
  }

  getDetails(event) {
    this.setState({
      isLoading: true
    });

    if (this.state.ticker) {
      this.polygonService.getTickerDetails(this.state.ticker)
        .then((overviewData) => { return overviewData; })
        .then((overviewData) => {
          this.setState({})
          this.alphaService.getAlphaData("BALANCE_SHEET", overviewData.symbol, '').then((balanceSheetData) => {
            this.setState({
              isLoading: false,
              overview: JSON.stringify(overviewData),
              balanceSheet: JSON.stringify(balanceSheetData)
            });
          });
        });

      if (event) {
        event.preventDefault();
      }
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    let overviewCard = null;
    let annualFinancialsCard = null;

    if (!this.state.isLoading) {
      overviewCard = <Overview overview={this.state.overview}></Overview>;
      annualFinancialsCard = <AnnualFinancials balanceSheet={this.state.balanceSheet}></AnnualFinancials>;
    }

    return (
      <div className="content">
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Search</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="pr-md-1" md="12">
                    <Col className="pr-md-1" md="12">
                      <FormGroup>
                        <label>Ticker</label>
                        <Input
                          placeholder="AAPL"
                          type="text"
                          value={this.state.ticker || this.query}
                          onChange={this.handleChange}
                        />
                        <Button onClick={this.getDetails} className="btn-fill" color="primary">
                          Get Details
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6"> 
            {overviewCard}
            {annualFinancialsCard}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Research;
