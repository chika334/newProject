import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Grid, Button, List, ListItem } from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';

import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import LocalLibraryTwoToneIcon from '@material-ui/icons/LocalLibraryTwoTone';
import GridOnTwoToneIcon from '@material-ui/icons/GridOnTwoTone';

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-nav-wrapper header-nav-wrapper-lg rounded navbar-dark">
        <div className="app-nav-logo">
          <a
            href="#/"
            onClick={(e) => e.preventDefault()}
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-nav-logo">
            <div className="app-nav-logo--icon rounded-circle">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-nav-logo--text">
              <span>Pavers</span>
            </div>
          </a>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <ul className="d-flex justify-content-center">
            <li>
              <a
                className="rounded-pill"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </li>{' '}
            <li>
              <a
                className="rounded-pill"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                3rd Party Gateway
              </a>
            </li>{' '}
            <li>
              <a
                className="rounded-pill"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Products
              </a>
            </li>{' '}
          </ul>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-block d-lg-none">
            <button
              onClick={toggle}
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': collapse
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
        <div className="d-flex d-lg-none">
          <Collapse
            in={collapse}
            className="nav-collapsed-wrapper navbar-collapse">
            <div className="nav-inner-wrapper">
              <Button
                onClick={toggle}
                className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'times']} />
                </span>
              </Button>

              <List
                component="div"
                className="nav-pills nav-neutral-primary nav-pills-rounded nav-lg flex-column p-3">
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center">
                  <span>Home</span>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center">
                  <span>3rd Party Gateway</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="px-4 d-flex align-items-center">
                  <span>Product</span>
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="opacity-6 ml-auto"
                  />
                </ListItem>
              </List>
            </div>
          </Collapse>
        </div>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
};
export default Header;
