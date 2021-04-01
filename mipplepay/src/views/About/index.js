import React from "react";
import { Container } from "@material-ui/core";
import pay from "../../assets/images/pay.jpg";
import hero1 from "../../assets/images/hero-bg/hero-9.jpg";
import OverviewHeader from "../../example-components/Overview/Overview1/OverviewHeader";

export default function index() {
  return (
    <div>
      <div className="bg-dark pl-5 pr-5">
          <OverviewHeader />
        </div>

      <div>
        <Container
          className="pt-5"
          style={{ paddingBottom: "25%", color: "#000" }}
        >
          <h2>About Us</h2>
          <p>
            Mipplepay is a platform which gives you the easiest and most
            convenient access to pay for everyday services like Phone Airtime,
            Data Subscription (GOtv, Dstv, Startimes), Education service, etc
            Payment is as simple as Logon - Select - Pay.
          </p>
        </Container>
      </div>
    </div>
  );
}
