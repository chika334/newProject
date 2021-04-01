import React, { Component } from "react";
import { Modal, Button, Card, Grid } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      show: false,
      phone: "",
      amount: "",
      image: "",
      imageDatas: null,
      data: [],
      email: "",
      variation: "",
      service: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.data(`${process.env.REACT_APP_DATA}`);
    this.FetchPromise();
  }

  data = (url) => {
    axios
      .get(url)
      .then((json) => {
        this.setState({ imageDatas: json.data });
      })
      .catch((response) => console.log(response));
  };

  FetchPromise = () => {
    const mtn_URL = fetch(process.env.REACT_APP_MTN_DATA).then((resp) =>
      resp.json()
    );
    const airtel_URL = fetch(process.env.REACT_APP_AIRTEL_DATA).then((resp) =>
      resp.json()
    );
    const glo_URL = fetch(process.env.REACT_APP_GLO_DATA).then((resp) =>
      resp.json()
    );
    const etisalat_URL = fetch(
      process.env.REACT_APP_ETISALAT_DATA
    ).then((resp) => resp.json());
    const smile_URL = fetch(process.env.REACT_APP_SMILE_DATA).then((resp) =>
      resp.json()
    );

    Promise.all([mtn_URL, airtel_URL, glo_URL, etisalat_URL, smile_URL])
      .then((files) => {
        this.setState({ ...this.state, data: files });
      })
      .catch((err) => console.log(err));
  };

  selectClick = (props) => {
    this.setState({ variation: props.variation, amount: props.amount });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, amount, variation, service } = this.state;

    this.props.history.push({
      pathname: "/profile/paid",
      search: "?query=abc",
      state: { detail: { name, email, phone, amount, variation, service } },
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
    const { imageDatas, data } = this.state;

    if (!data || !data.length) return null;

    const options = {};
    const [mtn, airtel, glo, etisalat, smile] = data;

    options["mtn"] = mtn.content.variations;
    options["airtel"] = airtel.content.variations;
    options["glo"] = glo.content.variations;
    options["etisalat"] = etisalat.content.variations;
    options["smile"] = smile.content.variations;

    const mtnData = mtn.content.variations.map((mtndata, index) => (
      <option
        value={mtndata.name}
        key={index}
        onClick={() =>
          this.selectClick({
            variation: mtndata.variation_code,
            amount: mtndata.variation_amount,
          })
        }
      >
        {mtndata.name}
      </option>
    ));

    const airtelData = airtel.content.variations.map((airteldata, index) => (
      <option
        value={airteldata.name}
        key={index}
        onClick={() =>
          this.selectClick({
            variation: airteldata.variation_code,
            amount: airteldata.variation_amount,
          })
        }
      >
        {airteldata.name}
      </option>
    ));

    const gloData = glo.content.variations.map((glodata, index) => (
      <option
        value={glodata.name}
        key={index}
        onClick={() =>
          this.selectClick({
            variation: glodata.variation_code,
            amount: glodata.variation_amount,
          })
        }
      >
        {glodata.name}
      </option>
    ));

    const etisalatData = etisalat.content.variations.map(
      (etisalatdata, index) => (
        <option
          value={etisalatdata.name}
          key={index}
          onClick={() =>
            this.selectClick({
              variation: etisalatdata.variation_code,
              amount: etisalatdata.variation_amount,
            })
          }
        >
          {etisalatdata.name}
        </option>
      )
    );

    const smileData = smile.content.variations.map((smiledata, index) => (
      <option
        value={smiledata.name}
        key={index}
        onClick={() =>
          this.selectClick({
            variation: smiledata.variation_code,
            amount: smiledata.variation_amount,
          })
        }
      >
        {smiledata.name}
      </option>
    ));

    if (!imageDatas) return null;
    const Imagedatas = imageDatas.content.map((imagedata, index) => {
      return (
        <div key={index} className="rows">
          <div className="cards btn columns sizes" key={index}>
            <img
              width="60"
              height="50"
              className="pr-2"
              src={imagedata.image}
              alt="modal"
            />
            <div>{imagedata.name}</div>
            <small>{imagedata.name} - Get instant top up</small>
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
      );
    });

    return (
      <div>
        {/* <Modal show={this.state.show} onHide={this.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>
							<img alt="modal" width="50" src={this.state.image} />
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
              {this.state.type === "MTN Data" && (
                <div>
                  <p>Data type: </p>
                  <select
                    className="dataDrop"
                    onChange={this.Submit}
                    style={{
                      width: "65%",
                      marginBottom: "5%",
                      padding: "5px",
                    }}
                    id="cars"
                    name="cars"
                  >
                    <option>Select Event Type</option>
                    {mtnData}
                  </select>
                </div>
              )}

              {this.state.type === "Airtel Data" && (
                <div>
                  <p>Data type: </p>
                  <select
                    className="dataDrop"
                    onChange={this.Submit}
                    style={{
                      width: "65%",
                      marginBottom: "5%",
                      padding: "5px",
                    }}
                    id="cars"
                    name="cars"
                  >
                    <option>Select Event Type</option>
                    {airtelData}
                  </select>
                </div>
              )}

              {this.state.type === "GLO Data" && (
                <div>
                  <p>Data type: </p>
                  <select
                    className="dataDrop"
                    onChange={this.Submit}
                    style={{
                      width: "65%",
                      marginBottom: "5%",
                      padding: "5px",
                    }}
                    id="cars"
                    name="cars"
                  >
                    <option>Select Event Type</option>
                    {gloData}
                  </select>
                </div>
              )}

              {this.state.type === "9mobile Data" && (
                <div>
                  <p>Data type: </p>
                  <select
                    className="dataDrop"
                    onChange={this.Submit}
                    style={{
                      width: "65%",
                      marginBottom: "5%",
                      padding: "5px",
                    }}
                    id="cars"
                    name="cars"
                  >
                    <option>Select Event Type</option>
                    {etisalatData}
                  </select>
                </div>
              )}

              {this.state.type === "Smile Payment" && (
                <div>
                  <p>Data type: </p>
                  <select
                    className="dataDrop"
                    onChange={this.Submit}
                    style={{
                      width: "65%",
                      marginBottom: "5%",
                      padding: "5px",
                    }}
                    id="cars"
                    name="cars"
                  >
                    <option>Select Event Type</option>
                    {smileData}
                  </select>
                </div>
              )}

              <div className="forms-form-group">
                <p>Phone Number</p>
                <input
                  type="tel"
                  id="quantity"
                  value={this.state.phone}
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
                  disabled
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
              <Grid container item lg={12} spacing={12}>
                {this.state.imageDatas === null
                  ? ""
                  : this.state.imageDatas.content.map((imagedata, index) => (
                      <>
                        <div className="column p-3">
                          <Card className="cardp p-2 h-100 mt-2">
                            <div className="mt-2 h-100">
                              <div className="h-50">
                                <div key={index} className="">
                                  <div className="sizes btn">
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

export default withRouter(Data);
