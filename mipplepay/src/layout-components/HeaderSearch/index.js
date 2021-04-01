import React from 'react';

// import projectLogo from '../assets/images/Pavers.svg';

import { connect } from 'react-redux';

import { setHeaderSearchHover } from '../../reducers/ThemeOptions';

const HeaderSearch = (props) => {
  const { headerSearchHover, setHeaderSearchHover } = props;

  const toggleHeaderSearchHover = () => {
    setHeaderSearchHover(!headerSearchHover);
  };

  return (
    <>
      <div className="app-nav-logo mt-4">
        <a
          href="#/"
          onClick={(e) => e.preventDefault()}
          title="Bamburgh React Admin Dashboard with Material-UI PRO"
          style={{ padding: '1em' }}>
          {/* <img alt="Pavers" src={projectLogo} width="60" /> */}
        </a>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerSearchHover: state.ThemeOptions.headerSearchHover
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderSearchHover: (enable) => dispatch(setHeaderSearchHover(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
