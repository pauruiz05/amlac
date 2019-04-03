import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Link} from "react-router-dom";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Main Chart
//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 210));
  data3.push(random(65, 240));
  data4.push(random(20, 150));
  data5.push(random(10, 190));
}

const mainChart = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [
    {
      label: "Security Bank",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      lineTension: 0.1,
      borderJoinStyle: "miter",
      data: data1
    },
    {
      label: "UCPB",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      lineTension: 0.1,
      borderJoinStyle: "miter",
      data: data2
    },
    {
      label: "Bank of the Philippine Island",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      lineTension: 0.1,
      borderJoinStyle: "miter",
      data: data3
    },
    {
      label: "Union Bank",
      backgroundColor: "transparent",
      borderColor: brandWarning,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      lineTension: 0.1,
      borderJoinStyle: "miter",
      data: data4
    },
    {
      label: "Banko De Oro",
      backgroundColor: "transparent",
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      lineTension: 0.1,
      borderJoinStyle: "miter",
      data: data5
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
          <Col>
            <Card>
              <CardHeader className="mb-0">
                Daily Bank Transactions
                <div className="small text-muted">Bank Hours: 8am - 4pm</div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12" xl="12">
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">UCPB</span>
                      </div>
                      <div className="progress-group-bars">
                      <div>
                        <Progress
                          className="progress-sm mt-2"
                          color="success"
                          value="34"
                        />
                        <div className="float-right">
                        <small className="text-muted">
                              34%
                        </small>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Security Bank
                        </span>
                      </div>
                      <div className="progress-group-bars">
                      <div>
                        <Progress
                          className="progress-sm mt-2"
                          color="info"
                          value="45"
                        />
                        <div className="float-right">
                        <div className="float-right">
                        <small className="text-muted">
                             45%
                        </small>
                        </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">UnionBank</span>
                      </div>
                      <div className="progress-group-bars">
                        <div>
                        <Progress
                          className="progress-sm mt-2"
                          color="warning"
                          value="78"
                        />
                        <div className="float-right">
                        <small className="text-muted">
                              78%
                        </small>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          BPI 
                        </span>
                      </div>
                      <div className="progress-group-bars">
                      <div>
                        <Progress
                          className="progress-sm mt-2"
                          color="danger"
                          value="50"
                        />
                        <div className="float-right">
                        <small className="text-muted">
                              50%
                        </small>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          BDO
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <div>
                        <Progress
                          className="progress-sm mt-2"
                          color="primary"
                          value="70"
                        />
                        <div className="float-right">
                        <small className="text-muted">
                              70%
                        </small>
                        </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">
                      Suspicious Transaction Report
                    </CardTitle>
                    <div className="small text-muted">2017 - 2019</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right">
                      <i className="icon-cloud-download" />
                    </Button>
                    <ButtonToolbar
                      className="float-right"
                      aria-label="Toolbar with button groups"
                    >
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(2)}
                          active={this.state.radioSelected === 2}
                        >
                          Week
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(3)}
                          active={this.state.radioSelected === 3}
                        >
                          Month
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick(4)}
                          active={this.state.radioSelected === 4}
                        >
                          Year
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: 300 + "px", marginTop: 40 + "px" }}
                >
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">UCPB</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="success"
                      value="40"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Security Bank</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="info"
                      value="20"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Union Bank</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="warning"
                      value="60"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">
                      Bank of the Philippine Island
                    </div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="danger"
                      value="80"
                    />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Banko De Oro</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress
                      className="progress-xs mt-2"
                      color="primary"
                      value="40"
                    />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <br />
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">
                        <i className="icon-people" />
                      </th>
                      <th>User</th>
                      <th className="text-center">Country</th>
                      <th className="text-center">Bank</th>
                      <th>Amount</th>
                      <th className="text-center">Transaction Method</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/1.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div><Link to="/users">Yiorgos Avraamu</Link></div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-us h4 mb-0"
                          title="us"
                          id="us"
                        />
                      </td>
                      <td className="text-center">
                        <div>UCPB</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-mastercard"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/2.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-muted">
                          <span>Recurring</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-br h4 mb-0"
                          title="br"
                          id="br"
                        />
                      </td>
                      <td className="text-center">
                        <div>Union Bank</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="10"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-visa"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/3.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-warning" />
                        </div>
                      </td>
                      <td>
                        <div>Juan Dela Cruz</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-ph h4 mb-0"
                          title="in"
                          id="in"
                        />
                      </td>
                      <td className="text-center">
                        <div>Banko De Oro</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="warning"
                          value="74"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-stripe"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>1 hour ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/4.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-secondary" />
                        </div>
                      </td>
                      <td>
                        <div>Joseph Estrada</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-ph h4 mb-0"
                          title="fr"
                          id="fr"
                        />
                      </td>
                      <td className="text-center">
                        <div>BPI</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>98%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="98"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-paypal"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last month</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/5.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div>Agapetus Tadeáš</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-es h4 mb-0"
                          title="es"
                          id="es"
                        />
                      </td>
                      <td className="text-center">
                        <div>Banko De Oro</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>22%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="22"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-google-wallet"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last week</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"assets/img/avatars/6.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Friderik Dávid</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i
                          className="flag-icon flag-icon-pl h4 mb-0"
                          title="pl"
                          id="pl"
                        />
                      </td>
                      <td className="text-center">
                        <div>Security Bank</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="43"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-amex"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Yesterday</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Dashboard;
