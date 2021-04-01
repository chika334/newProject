import React, { Component } from "react";
import { Modal, Button, Card, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { verifyNumber } from "../_action/verifyNumber";
import PropTypes from "prop-types";
import { clearErrors } from "../_action/errorAction";
import axios from "axios";

class Nepa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      msg: null,
      type: "",
      show: false,
      phone: "",
      amount: "",
      select: "",
      meter: "",
      email: "",
      image: "",
      imageDatas: null,
      data: [],
      service: "",
      redirect: false,
      transactionId: null,
    };
  }

  static propTypes = {
    authUser: PropTypes.object.isRequired,
    verify: PropTypes.object.isRequired,
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.data(`${process.env.REACT_APP_IMAGE_ELECTRIC}`);
    const transactionID = uuid();
    this.setState({ transactionId: transactionID });
    // this.refreshPage()
  }

  // refreshPage() {
  //   window.location.reload();
  // }

  data = (url) => {
    axios
      .get(url)
      .then((json) => {
        this.setState({ imageDatas: json.data });
      })
      .catch((response) => console.log(response));
  };

  verifyNumber = async () => {
    const { meter, select, service, transactionId } = this.state;

    const value = {
      meter,
      service,
      select,
      transactionId,
    };

    return await verifyNumber(value, this.props.authUser.token);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      meter,
      select,
      phone,
      email,
      amount,
      service,
      transactionId,
    } = this.state;

    try {
      const result = await this.verifyNumber();
      const { success, msg, verify } = result;

      const verifyCustomerName = verify.Customer_Name;
      const verifyTransactionID = verify.transactionID;
      const verifyAddress = verify.Address;

      //console.log("backend", verify.transactionID)

      //console.log("this.state", transactionId)

      console.log(result);
      console.log(success);
      console.log(msg);
      if (success) {
        if (transactionId === verify.transactionID) {
          // console.log(verify.transactionID);
          // console.log(transactionId);
          this.props.history.push({
            pathname: "/profile/paid",
            search: "?query=abc",
            state: {
              detail: {
                name,
                meter,
                select,
                phone,
                email,
                amount,
                service,
                verifyTransactionID,
                verifyCustomerName,
                verifyAddress,
              },
            },
          });
        } else {
          this.setState({ msg: msg });
        }
      }
    } catch (err) {
      this.setState({ msg: err.response.data.msg });
    }
  };

  showModal = (data) => {
    this.setState({ show: true, image: data.image });
  };

  handleAirtimeModal = (props) => {
    this.setState({
      show: true,
      image: props.image,
      type: props.type,
      name: props.name,
      service: props.serviceID,
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  Submit = (e) => {
    this.setState({ select: e.target.value });
  };

  render() {
    const { imageDatas } = this.state;

    if (!imageDatas) return null;
    const Imagedatas = imageDatas.content.map((imagedata, index) => {
      return (
        // <Container>
        // <Row className="rows">
        //   <Col className="columns">
        <div key={index} className="rows">
          <div
            className="cards btn columns sizes"
            // style={{  }}
            // className="cards btn columns"
            key={index}
          >
            <img
              width="60"
              height="50"
              className="pr-2"
              src={imagedata.image}
              alt="modal"
            />
            <div>{imagedata.name}</div>
            <small>Fast and reliable electric bill payment</small>
            <hr />
            <Button
              onClick={() =>
                this.handleAirtimeModal({
                  image: imagedata.image,
                  type: imagedata.name,
                  name: imagedata.name,
                  serviceID: imagedata.serviceID,
                })
              }
            >
              Buy
            </Button>
          </div>
        </div>
        //   </Col>
        // </Row>
        // </Container>
      );
    });

    return (
      <div>
        {/* <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img width="50" src={this.state.image} alt="modal" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> */}
        <Modal
          open={this.state.show}
          onClose={this.hideModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
            <form className="forms" onSubmit={this.handleSubmit}>
              {this.state.msg ? (
                <Alert variant="danger">{this.state.msg}</Alert>
              ) : null}
              <p>Metertype </p>
              <select
                onChange={this.Submit}
                style={{ width: "60%", marginBottom: "5%", padding: "5px" }}
              >
                <option>Please Select metertype</option>
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
              </select>

              <div className="forms-form-group">
                <p>Meter Number</p>
                <input
                  type="tel"
                  id="quantity"
                  value={this.state.meter}
                  className="email"
                  name="meter"
                  placeholder="Enter Meter Number"
                  onChange={this.handleChange}
                />
              </div>

              <div className="forms-form-group">
                <p>Phone Number</p>
                <input
                  type="tel"
                  id="quantity"
                  value={this.state.phone}
                  className="email"
                  name="phone"
                  placeholder="Enter phone number"
                  onChange={this.handleChange}
                />
              </div>

              <div className="forms-form-group">
                <p>Email Address</p>
                <input
                  type="email"
                  className="email"
                  value={this.state.email}
                  name="email"
                  placeholder="Enter Email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="forms-form-group">
                <p>Amount</p>
                <input
                  type="tel"
                  className="password"
                  value={this.state.amount}
                  name="amount"
                  placeholder="Enter Amount"
                  onChange={this.handleChange}
                />
              </div>

              <div className="but">
                <button
                  onSubmit={this.handleSubmit}
                  type="submit"
                  className="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>

        <div>
          <div>
            <div className="row">
              <Grid container item xs={12} spacing={3}>
                {this.state.imageDatas === null
                  ? ""
                  : this.state.imageDatas.content.map((imagedata, index) => (
                      <>
                        <div className="column p-3">
                          <Card className="cardp p-2 h-100 mt-2">
                            <div className="mt-2 h-100">
                              <div className="h-50">
                                <div key={index} className="">
                                  <div className="cards columns sizes btn">
                                    <img
                                      width="60"
                                      height="50"
                                      className="pr-2"
                                      src={imagedata.image}
                                      alt="side"
                                    />
                                    <div>{imagedata.name}</div>
                                    <small>
                                      {imagedata.name}-Get instant top up
                                    </small>
                                    <hr />
                                    <Button
                                      onClick={() =>
                                        this.handleAirtimeModal({
                                          image: imagedata.image,
                                          type: imagedata.name,
                                          name: imagedata.name,
                                          serviceID: imagedata.serviceID,
                                        })
                                      }
                                    >
                                      Buy
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </>
                    ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  verify: state.verify,
});

export default withRouter(connect(mapStateToProps, { clearErrors })(Nepa));
