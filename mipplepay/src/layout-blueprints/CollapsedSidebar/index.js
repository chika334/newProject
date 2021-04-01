import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Header /* SidebarCollapsed */ } from '../../layout-components';

const CollapsedSidebar = (props) => {
  const {
    children,
    contentBackground,
    sidebarToggleMobile,
    headerDrawerToggle,
    headerSearchHover
  } = props;

  return (
    <>
      <div
        className={clsx('vh-100', contentBackground, {
          'app-sidebar-mobile-open': sidebarToggleMobile,
          'header-drawer-open': headerDrawerToggle,
          'search-wrapper-open': headerSearchHover
        })}>
        {/*     <SidebarCollapsed /> */}
        <div className="app-main">
          <Header />
          <div className="">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

CollapsedSidebar.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  contentBackground: state.ThemeOptions.contentBackground,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle,
  headerSearchHover: state.ThemeOptions.headerSearchHover
});

export default connect(mapStateToProps)(CollapsedSidebar);
