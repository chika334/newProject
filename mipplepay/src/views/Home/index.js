/* import React from 'react';


const Home = () => {
    return (
      <>
       
        <div className="app-wrapper min-vh-100 bg-white">
          <div className="hero-wrapper w-100 bg-composed-wrapper bg-neutral-primary min-vh-100">
            <div className="flex-grow-1 w-100 d-flex align-items-center"></div>
          </div>
        </div>
      </>
    );
};
export default Home; */
import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  InputAdornment,
  ButtonGroup,
  Card,
  Button,
  List,
  ListItem,
  TextField,
  Container
} from '@material-ui/core';
import Header from './components/Header';

import Pagination from '@material-ui/lab/Pagination';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Trend from 'react-trend';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import GridOnTwoToneIcon from '@material-ui/icons/GridOnTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ViewCompactTwoToneIcon from '@material-ui/icons/ViewCompactTwoTone';

export default function LivePreviewExample() {
  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  const [searchStatus3, setSearchStatus3] = useState(false);
  const toggleSearch3 = () => setSearchStatus3(!searchStatus3);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout">
        <div className="app-inner-content-layout--main bg-white p-0">
          <PerfectScrollbar>
            <div className="px-5 pt-5">
              <Card className="d-block d-md-flex text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row">
                <div className="d-block d-md-flex align-items-center">
                  <div>
                    <b className="font-size-lg">2</b> Products
                  </div>
                  <div className="mx-4 d-none d-md-block">
                    <div className="divider-v bg-dark opacity-3 position-relative" />
                    <div className="divider-v bg-dark opacity-3 position-relative" />
                  </div>
                  <div className="d-flex d-md-block justify-content-center py-3 py-md-0">
                    <div
                      className={clsx('search-wrapper search-wrapper--grow', {
                        'is-active': searchStatus3
                      })}>
                      <TextField
                        variant="outlined"
                        size="small"
                        classes={{ root: 'bg-white' }}
                        className="w-100"
                        placeholder="Search products"
                        id="input-with-icon-textfield22-3"
                        onFocus={toggleSearch3}
                        onBlur={toggleSearch3}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchTwoToneIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonGroup variant="text">
                    <Button
                      className={clsx(
                        'bg-primary btn-transition-none d-40 p-0 btn-icon btn-animated-icon-sm text-white',
                        { active: activeTab === '1' }
                      )}
                      onClick={() => {
                        toggle('1');
                      }}>
                      <span className="btn-wrapper--icon d-20 d-flex align-items-center justify-content-center">
                        <ViewCompactTwoToneIcon />
                      </span>
                    </Button>
                    <Button
                      className={clsx(
                        'bg-primary btn-transition-none d-40 p-0 btn-icon btn-animated-icon-sm text-white',
                        { active: activeTab === '2' }
                      )}
                      onClick={() => {
                        toggle('2');
                      }}>
                      <span className="btn-wrapper--icon d-20 d-flex align-items-center justify-content-center">
                        <GridOnTwoToneIcon />
                      </span>
                    </Button>
                  </ButtonGroup>
                </div>
              </Card>
            </div>

            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '1'
              })}
              index={1}>
              <div className="p-5">
                <div className="text-center">
                  <h5 className="text-first font-weight-bold font-size-xxl">
                    Payment Gateway
                  </h5>
                  <p className="text-black-50 font-size-lg">
                    These are the 3rd party gateway you have added to your
                    profile
                  </p>
                </div>
                <Grid container spacing={6}>
                  <Grid item md={4} lg={12} xl={4}>
                    <Card className="card-box card-box-border-bottom border-primary my-4">
                      <div className="text-center py-3">
                        <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-plum-plate text-white btn-icon mx-auto text-center">
                          <FontAwesomeIcon
                            icon={['far', 'bell']}
                            className="font-size-xxl"
                          />
                        </div>
                        <div className="font-size-xl font-weight-bold pt-2 text-black">
                          Paystack
                        </div>
                        <div className="opacity-5 pb-3">3 Products</div>

                        <div className="divider mx-auto w-50 my-3" />
                        <div className="text-center">
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['far', 'eye']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'edit']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4} lg={12} xl={4}>
                    <Card className="card-box card-box-border-bottom border-primary my-4">
                      <div className="text-center py-3">
                        <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-happy-fisher text-white btn-icon mx-auto text-center">
                          <FontAwesomeIcon
                            icon={['fas', 'cubes']}
                            className="font-size-xl"
                          />
                        </div>
                        <div className="font-size-xl font-weight-bold pt-2 text-black">
                          Flutterwave
                        </div>
                        <div className="opacity-5 pb-3">Latest analytics</div>

                        <div className="divider mx-auto w-50 my-3" />
                        <div className="text-center">
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['far', 'eye']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'edit']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item md={4} lg={12} xl={4}>
                    <Card className="card-box card-box-border-bottom border-primary my-4">
                      <div className="text-center py-3">
                        <div className="d-60 rounded-circle border-0 my-2 card-icon-wrapper bg-love-kiss text-white btn-icon mx-auto text-center">
                          <FontAwesomeIcon
                            icon={['fas', 'shapes']}
                            className="font-size-xl"
                          />
                        </div>
                        <div className="font-size-xl font-weight-bold pt-2 text-black">
                          Paypal
                        </div>
                        <div className="opacity-5 pb-3">Successful orders</div>

                        <div className="divider mx-auto w-50 my-3" />
                        <div className="text-center">
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['far', 'eye']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'edit']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                            variant="outlined">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="font-size-lg"
                              />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <div className="text-center">
                  <Button variant="text" className="text-first font-size-lg">
                    View All
                  </Button>
                </div>
              </div>
              <div className="divider opacity-3 rounded-lg m-3" />
            </div>
            <div
              className={clsx('tab-item-wrapper', {
                active: activeTab === '2'
              })}
              index={2}>
              <div className="p-5">
                <div className="text-center">
                  <h5 className="text-success font-weight-bold font-size-xxl">
                    Product
                  </h5>
                  <p className="text-black-50 font-size-lg">
                    These are the products that have been successfully added to
                    your profile with their respective Payment Gateway
                  </p>
                </div>
                <Table className="table table-alternate-spaced text-nowrap mb-0">
                  <thead className="bg-white font-size-sm text-uppercase">
                    <tr>
                      <th className="bg-white text-left px-4">Product</th>
                      <th className="bg-white text-center">Date Added</th>
                      <th className="bg-white text-center">
                        No. of Payment gateways
                      </th>

                      <th className="bg-white text-right px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4">
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
                            <FontAwesomeIcon
                              icon={['far', 'bell']}
                              className="font-size-xxl"
                            />
                          </div>
                          <div>
                            <div className="font-weight-bold">Fastpayr</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span>14 October</span>
                      </td>
                      <td className="text-center">
                        <span>2</span>
                      </td>
                      <td className="text-right px-4">
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['far', 'eye']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'edit']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'times']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                    <tr>
                      <td className="px-4">
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-happy-fisher">
                            <FontAwesomeIcon
                              icon={['fas', 'cubes']}
                              className="font-size-xxl"
                            />
                          </div>
                          <div>
                            <div className="font-weight-bold">Card Master</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <span>18 October</span>
                      </td>
                      <td className="text-center">
                        <span>1</span>
                      </td>

                      <td className="text-right px-4">
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-first"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['far', 'eye']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-warning"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'edit']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                        <Button
                          className="p-0 d-30 mx-1 btn-transition-none border-0 btn-outline-danger"
                          variant="outlined">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'times']}
                              className="font-size-lg"
                            />
                          </span>
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                  </tbody>
                </Table>

                {/*    <div className="d-flex mt-4 align-items-center justify-content-center flex-wrap">
                  <Pagination className="pagination-primary" count={10} />
                </div> */}
                <div className="text-center">
                  <Button variant="text" className="text-first font-size-lg">
                    View All
                  </Button>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar app-inner-content-layout--sidebar__xl pos-r bg-white border-left',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <PerfectScrollbar>
            <div className="d-block d-lg-flex align-items-center p-4 justify-content-center">
              <div className="text-center text-lg-left mr-lg-4">
                <div className="font-size-lg text-black-50">Welcome back,</div>
                <div className="display-4 font-weight-bold">
                  Anifowose Gbolahan
                </div>
              </div>
            </div>

            <div className="divider my-2 mx-3" />

            <div className="p-4">
              <Grid container spacing={6}>
                <Grid item sm={6}>
                  <div className="pb-3">
                    <div className="font-size-lg text-black-50">
                      Payment Gateways
                    </div>
                    <Card className="border-0 shadow-none my-2 overflow-visible">
                      <div className="card-indicator bg-danger" />
                      <div className="display-3 line-height-1 font-weight-bold ml-3">
                        3
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="pb-3">
                    <div className="font-size-lg text-black-50">Products</div>
                    <Card className="border-0 shadow-none my-2 overflow-visible">
                      <div className="card-indicator bg-success" />
                      <div className="display-3 line-height-1 font-weight-bold ml-3">
                        2
                      </div>
                    </Card>
                  </div>
                </Grid>
                {/*   <Grid item sm={6}>
                  <div className="pb-3">
                    <div className="font-size-lg text-black-50">
                      In Progress
                    </div>
                    <Card className="border-0 shadow-none my-2 overflow-visible">
                      <div className="card-indicator bg-first" />
                      <div className="display-3 line-height-1 font-weight-bold ml-3">
                        12
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="pb-3">
                    <div className="font-size-lg text-black-50">Cancelled</div>
                    <Card className="border-0 shadow-none my-2 overflow-visible">
                      <div className="card-indicator bg-warning" />
                      <div className="display-3 line-height-1 font-weight-bold ml-3">
                        31
                      </div>
                    </Card>
                  </div>
                </Grid> */}
              </Grid>
            </div>

            <div className="divider mt-2" />

            <div>
              <div
                className={clsx(
                  'd-flex transition-base align-items-center justify-content-between py-2 px-4',
                  { 'bg-secondary': !inputBg }
                )}></div>
              <div className="divider" />

              <div className="divider bg-dark opacity-3" />
              <List component="div" className="list-group-flush">
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="d-flex justify-content-between align-items-center py-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="font-weight-bold font-size-sm text-black">
                        Add Payment Gateway
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      size="small"
                      className="btn-neutral-dark btn-pill btn-icon d-30 p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                      </span>
                    </Button>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="d-flex justify-content-between align-items-center py-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="font-weight-bold font-size-sm text-black">
                        Add Product
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      size="small"
                      className="btn-neutral-dark btn-pill btn-icon d-30 p-0">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'plus']} />
                      </span>
                    </Button>
                  </div>
                </ListItem>
              </List>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </>
  );
}
