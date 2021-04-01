import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

import projectLogo from "../../../assets/images/react.svg";
import { NavLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function LivePreviewExample() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg navbar-dark">
        <div className="app-nav-logo">
          <NavLink
            to="/"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo app-nav-logo--light"
          >
            {/* <div className="app-nav-logo--icon rounded-lg shadow-second-sm bg-secondary border-0">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div> */}
            <div className="app-nav-logo--text">
              <b className="text-uppercase">MIPPLE</b>
              <span>PAY</span>
            </div>
          </NavLink>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex nav nav-neutral-first justify-content-center">
            <li>
              <NavLink to="/" className="font-weight-bold rounded-sm px-3">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="font-weight-bold rounded-sm px-3">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="font-weight-bold rounded-sm px-3">
                Profile
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3"
              >
                Our Products
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--md">
                <div
                  className="shadow-lg w-100 p-4 rounded"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  <div className="px-4 text-uppercase pb-2 text-dark font-weight-bold font-size-sm">
                    Our Products
                  </div>
                  <List
                    component="div"
                    className="nav-pills nav-transparent nav-pills-rounded flex-column"
                  >
                    <ListItem
                      component="a"
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/electric`
                        );
                      }}
                      target="_blank"
                      className="px-4 text-dark-50 d-flex align-items-center"
                    >
                      <span>Electric</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/water`
                        );
                      }}
                      target="_blank"
                      className="px-4 d-flex text-dark-50 align-items-center"
                    >
                      <span>Water</span>
                    </ListItem>
                    <ListItem
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/cable`
                        );
                      }}
                      // selected
                      className="px-4 d-flex text-dark-50 align-items-center"
                    >
                      <span>Cable</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/airtime`
                        );
                      }}
                      className="px-4 d-flex text-dark-50 align-items-center"
                    >
                      <span>Airtime</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/data`
                        );
                      }}
                      className="px-4 d-flex text-dark-50 align-items-center"
                    >
                      <span>Data</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      onClick={(e) => {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/transfer`
                        );
                      }}
                      className="px-4 d-flex text-dark-50 align-items-center"
                    >
                      <span>Bank Transfer</span>
                    </ListItem>
                  </List>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="font-weight-bold rounded-lg text-white px-3"
              >
                Forms
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--lg">
                <div className="shadow-sm-dark w-100 bg-white p-3 rounded">
                  <Grid container spacing={0}>
                    <Grid item lg={6}>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                      >
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsClipboard"
                          className="d-flex align-items-center"
                        >
                          <span>Clipboard</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsColorpicker"
                          className="d-flex align-items-center"
                        >
                          <span>Colorpicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsDatepicker"
                          className="d-flex align-items-center"
                        >
                          <span>Datepicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsDualListbox"
                          className="d-flex align-items-center"
                        >
                          <span>Dual Listbox</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsInputMask"
                          className="d-flex align-items-center"
                        >
                          <span>Input Mask</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsInputSelect"
                          className="d-flex align-items-center"
                        >
                          <span>Input Select</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsSlider"
                          className="d-flex align-items-center"
                        >
                          <span>Slider</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsSteppers"
                          className="d-flex align-items-center"
                        >
                          <span>Steppers</span>
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item lg={6}>
                      <List
                        component="div"
                        className="nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                      >
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsTextareaAutosize"
                          className="d-flex align-items-center"
                        >
                          <span>Textarea Autosize</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsTimepicker"
                          className="d-flex align-items-center"
                        >
                          <span>Timepicker</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsToggleSwitch"
                          className="d-flex align-items-center"
                        >
                          <span>Toggle Switch</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsTypeahead"
                          className="d-flex align-items-center"
                        >
                          <span>Typeahead</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsUpload"
                          className="d-flex align-items-center"
                        >
                          <span>Upload</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsValidation"
                          className="d-flex align-items-center"
                        >
                          <span>Validation</span>
                        </ListItem>
                        <ListItem
                          button
                          component={NavLink}
                          to="/FormsWysiwygEditor"
                          className="d-flex align-items-center"
                        >
                          <span>WYSIWYG Editors</span>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button
              // href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-lg text-nowrap font-size-xs text-uppercase shadow-second-sm btn-danger font-weight-bold"
            >
              Register
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx("navbar-toggler hamburger hamburger--elastic", {
                "is-active": collapse,
              })}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none">
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper shadow-lg navbar-collapse"
          >
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </span>
              </Button>
              <div className="p-3">
                <div className="px-4 text-uppercase py-2 text-primary font-weight-bold font-size-sm">
                  Dashboards
                </div>
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary mb-3 nav-pills-rounded flex-column"
                >
                  <ListItem
                    button
                    component={NavLink}
                    to="/DashboardMonitoring"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Monitoring</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/DashboardCommerce"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Commerce</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/DashboardAnalytics"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Analytics</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/DashboardStatistics"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Statistics</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                </List>
                <div className="px-4 text-uppercase pb-2 text-primary font-weight-bold font-size-sm">
                  Apps Pages
                </div>
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                >
                  <ListItem
                    button
                    component={NavLink}
                    to="/PageCalendar"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Calendar</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/PageChat"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Chat</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/PageFileManager"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>File Manager</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/PageProjects"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Projects</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                  <ListItem
                    button
                    component={NavLink}
                    to="/PageProfile"
                    className="px-4 d-flex align-items-center"
                  >
                    <span>Profile</span>
                    <FontAwesomeIcon
                      icon={["fas", "angle-right"]}
                      className="opacity-6 ml-auto"
                    />
                  </ListItem>
                </List>
              </div>
              <div className="divider" />
              <div className="m-3">
                <div className="bg-primary px-3 py-4 rounded">
                  <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                    Individual Apps
                  </div>
                  <List
                    component="div"
                    className="nav-pills nav-transparent nav-pills-rounded flex-column"
                  >
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      selected
                      className="px-4 text-white-50 d-flex align-items-center"
                    >
                      <span>General</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-crypto-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center"
                    >
                      <span>Crypto</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center"
                    >
                      <span>Messenger</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                      target="_blank"
                      className="px-4 d-flex text-white-50 align-items-center"
                    >
                      <span>Commerce</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      disabled
                      className="px-4 d-flex text-white-50 align-items-center"
                    >
                      <span>Learning</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled
                    >
                      <span>Monitoring</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled
                    >
                      <span>Fleet Manager</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 d-flex text-white-50 align-items-center"
                      disabled
                    >
                      <span>Banking</span>
                    </ListItem>
                  </List>
                </div>
              </div>
              <div className="divider" />
              <div className="card-footer bg-secondary text-center p-3">
                <Button
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-lg text-nowrap font-size-sm text-uppercase shadow-second-sm btn-success"
                >
                  Register
                </Button>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx("collapse-page-trigger", { "is-active": collapse })}
        onClick={toggle}
      />
    </>
  );
}
