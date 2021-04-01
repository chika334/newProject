import React from 'react';

import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import HeaderDots from '../../layout-components/HeaderDots';
import HeaderDrawer from '../../layout-components/HeaderDrawer';
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import HeaderSearch from '../../layout-components/HeaderSearch';
import HeaderMenu from '../../layout-components/HeaderMenu';

const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className="app-header shadow-sm-dark "
        style={{ paddingLeft: '1em', paddingRight: '2em' }}>
        <div className="app-header--pane">
           <HeaderSearch />
         {/*  <HeaderMenu /> */}
        </div>
        <div className="app-header--pane">
          <HeaderDots />
          <HeaderUserbox />
          {/*   <HeaderDrawer /> */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerBgTransparent: state.ThemeOptions.headerBgTransparent,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
