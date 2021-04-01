import React, { Component } from "react";
import { Modal, Button, Grid, Card, CardContent } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { BuyCreditFund } from "../_action/airtime";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      email: "",
      show: false,
      phone: "",
      amount: "",
      image: "",
      imageDatas: null,
      data: [],
      service: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.data(`${process.env.REACT_APP_CREDIT}`);
  }

  data = (url) => {
    axios
      .get(url)
      .then((json) => {
        // console.log(json.data);
        this.setState({ imageDatas: json.data });
      })
      .catch((response) => console.log(response));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, service, email, amount, phone, type } = this.state;
    const uuidvar = uuid();

    this.props.history.push({
      pathname: "/profile/paid",
      search: "?query=abc",
      state: { detail: { name, email, phone, amount, uuidvar, service, type } },
    });
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

  render() {
    const { imageDatas } = this.state;

    // if (!imageDatas) return null;

    return (
      <div>
        <Modal
          open={this.state.show}
          onClose={this.hideModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div>
            <form className="forms" onSubmit={this.handleSubmit}>
              <div className="forms-form-group">
                <p>Phone Number</p>
                <input
                  type="tel"
                  id="quantity"
                  value={this.state.phone || ""}
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
                  value={this.state.email || ""}
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
                  value={this.state.amount || ""}
                  name="amount"
                  placeholder="Min NGN 50, Max NGN 50000"
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
    );
  }
}

export default withRouter(connect(null, { BuyCreditFund })(Credit));
