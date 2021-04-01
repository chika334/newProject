import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import Data from "../../component/Data";
import Tvsub from "../../component/Tvsub";
//import Insurance from '../../component/insurance'
import Credit from "../../component/credit";
import Nepa from "../../component/nepa";
import pay from "../../assets/images/pay.jpg";
import hero1 from "../../assets/images/hero-bg/hero-9.jpg";
import OverviewHeader from "../../example-components/Overview/Overview1/OverviewHeader";
// import '../css/modalForm.scss';

export class Payment extends Component {
  render() {
    const { isAuthenticated } = this.props;
    //   if(isAuthenticated=== false) return <Redirect to="/login" />
    return (
      <>
        {/* <Container> */}
        <div className="bg-dark pl-5 pr-5">
          <OverviewHeader />
        </div>
        {/* </Container> */}
        {/* <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: "url(" + hero1 + ")" }}
          />
          {/* bg-deep-sky
        <div className="bg-composed-wrapper--bg opacity-6" />
        <div className="bg-composed-wrapper--bg bg-sunrise-purple opacity-6" />
        <div
          className="bg-composed-wrapper--image opacity-9"
          style={{ backgroundImage: "url(" + pay + ")" }}
          // style={{ backgroundImage: 'url(' + particles2 + ')' }}
        />{" "}
        */}
        <div className="p-5 pt-5">
          <div>
            <h3 className="pt-3">
              <b>Payment</b>
            </h3>
            <p>Select the service you want to make payment for</p>
            <div className="pt-2">
              <h4>Airtime Recharge</h4>
              <Credit />
            </div>
          </div>

          <div className="pt-4">
            <h4>Data Services</h4>
            <div>
              <Data />
            </div>
          </div>

          <div className="pt-4">
            <h4>TV Subscription</h4>
            <div>
              <Tvsub />
            </div>
          </div>

          <div className="pt-4">
            <h4>Electricity bill</h4>
            <div>
              <Nepa />
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
});

export default connect(mapStateToProps, null)(Payment);
