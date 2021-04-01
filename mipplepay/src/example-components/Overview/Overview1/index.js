import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Container, Button, Card } from "@material-ui/core";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WifiIcon from "@material-ui/icons/Wifi";
import TvIcon from "@material-ui/icons/Tv";
// import ListItem from "@material-ui/core/ListItem";
import { NavLink, withRouter } from "react-router-dom";
// import particles2 from "../../../assets/images/hero-bg/particles-1.svg";
import pay from "../../../assets/images/pay.jpg";
import hero1 from "../../../assets/images/hero-bg/hero-9.jpg";
// import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
// import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
// import TuneTwoToneIcon from "@material-ui/icons/TuneTwoTone";
// import logo from "../../../assets/images/mipplepay.jpeg";
// import TrendingUpTwoToneIcon from "@material-ui/icons/TrendingUpTwoTone";
import OverviewHeader from "./OverviewHeader.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* Prev */}
      <FontAwesomeIcon icon={["fas", "chevron-left"]} />
    </div>
  );
}

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* Next */}
      <FontAwesomeIcon icon={["fas", "chevron-right"]} />
    </div>
  );
}

class Header extends Component {
  // const [selectedIndex, setSelectedIndex] = useState(1);
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataImageName: [],
      dataPics: [],
      selectedIndex: 1,
    };
  }

  componentDidMount() {
    this.FetchPromise();
  }

  FetchPromise = () => {
    const dataImage = fetch(process.env.REACT_APP_DATA).then((resp) =>
      resp.json()
    );
    const creditImage = fetch(process.env.REACT_APP_CREDIT).then((resp) =>
      resp.json()
    );
    const tvsubImage = fetch(process.env.REACT_APP_IMAGE_TVSUB).then((resp) =>
      resp.json()
    );
    const electricImage = fetch(
      process.env.REACT_APP_IMAGE_ELECTRIC
    ).then((resp) => resp.json());

    Promise.all([dataImage, creditImage, tvsubImage, electricImage])
      .then((files) => {
        this.setState({ ...this.state, data: files });
      })
      .catch((err) => console.log(err));
  };

  handleProducts = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      this.props.history.push("/profile/payment");
    } else {
      this.props.history.push("/login");
      localStorage.setItem("productLink", "/profile/payment");
    }
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { data } = this.state;
    if (!data || !data.length) return null;
    data.map((setData) =>
      setData.content.map(
        (allDataSet) => (
          this.state.dataImageName.push(`${allDataSet.name}`),
          this.state.dataPics.push(`${allDataSet.image}`)
        )
      )
    );

    const details = [
      {
        name: this.state.dataImageName[0],
        image: this.state.dataPics[0],
        description: `Buy your ${this.state.dataImageName[0]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[1],
        image: this.state.dataPics[1],
        description: `Buy your ${this.state.dataImageName[1]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[2],
        image: this.state.dataPics[2],
        description: `Buy your ${this.state.dataImageName[2]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[3],
        image: this.state.dataPics[3],
        description: `Buy your ${this.state.dataImageName[3]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[4],
        image: this.state.dataPics[4],
        description: `Buy your ${this.state.dataImageName[4]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[5],
        image: this.state.dataPics[5],
        description: `Buy your ${this.state.dataImageName[5]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[6],
        image: this.state.dataPics[6],
        description: `Buy your ${this.state.dataImageName[6]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[7],
        image: this.state.dataPics[7],
        description: `Buy your ${this.state.dataImageName[7]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[8],
        image: this.state.dataPics[8],
        description: `Buy your ${this.state.dataImageName[8]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[9],
        image: this.state.dataPics[9],
        description: `Buy your ${this.state.dataImageName[9]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[10],
        image: this.state.dataPics[10],
        description: `Buy your ${this.state.dataImageName[10]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[11],
        image: this.state.dataPics[11],
        description: `Buy your ${this.state.dataImageName[11]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[12],
        image: this.state.dataPics[12],
        description: `Buy your ${this.state.dataImageName[12]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[13],
        image: this.state.dataPics[13],
        description: `Buy your ${this.state.dataImageName[13]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[14],
        image: this.state.dataPics[14],
        description: `Buy your ${this.state.dataImageName[14]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[15],
        image: this.state.dataPics[15],
        description: `Buy your ${this.state.dataImageName[15]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[16],
        image: this.state.dataPics[16],
        description: `Buy your ${this.state.dataImageName[16]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[17],
        image: this.state.dataPics[17],
        description: `Buy your ${this.state.dataImageName[17]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[18],
        image: this.state.dataPics[18],
        description: `Buy your ${this.state.dataImageName[18]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[19],
        image: this.state.dataPics[19],
        description: `Buy your ${this.state.dataImageName[19]} fast and reliable`,
      },
      {
        name: this.state.dataImageName[20],
        image: this.state.dataPics[20],
        description: `Buy your ${this.state.dataImageName[20]} fast and reliable`,
      },
    ];

    const marketingTestimonials1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1,
      cssEase: "linear",
      nextArrow: <SliderArrowNext />,
      prevArrow: <SliderArrowPrev />,
      className: "slides",
      responsive: [
        {
          breakpoint: 599,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ],
    };
    return (
      <>
        <div className="bg-dark pl-5 pr-5">
          <OverviewHeader />
        </div>
        <div className="hero-wrapper">
          {/* <Container> */}
          {/* </Container> */}
          <div className="hero-wrapper--content">
            <div
              className="bg-composed-wrapper--image opacity-5"
              style={{ backgroundImage: "url(" + hero1 + ")" }}
            />
            {/* bg-deep-sky  */}
            <div className="bg-composed-wrapper--bg opacity-6" />
            <div className="bg-composed-wrapper--bg bg-sunrise-purple opacity-6" />
            <div
              className="bg-composed-wrapper--image opacity-9"
              style={{ backgroundImage: "url(" + pay + ")" }}
              // style={{ backgroundImage: 'url(' + particles2 + ')' }}
            />
            <div className="bg-composed-wrapper--content">
              <Container className="z-over shadow-container-content-5 text-white text-center pt-5">
                <Grid
                  item
                  md={11}
                  lg={12}
                  xl={8}
                  // className="mx-auto py-3 py-lg-5"
                >
                  <Grid
                    // className="d-flex justify-content-space-betwee"
                    style={{ display: "flex", justifyContent: "space-between" }}
                    container
                    spacing={3}
                  >
                    <Grid className="bg" item xs={12} md={6} lg={6} xl={12}>
                      <div>
                        <h2 className="p-5 display-1 font-weight-bold">
                          Mipple pay
                        </h2>
                        <p className="font-size-xl py-3 text-white-50">
                          Payment made easy
                        </p>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      <div
                        style={{ overflow: "auto", maxHeight: "300px" }}
                        className="resp-tabs-container shadow-md rounded p-3"
                      >
                        <List component="nav" aria-label="main mailbox folders">
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemIcon>
                              <EmojiObjectsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Electricity Bill" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemIcon>
                              <TvIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cable TV" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemIcon>
                              <PhoneAndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mobile Recharge" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemIcon>
                              <WifiIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mobile Data" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                          <ListItem
                            button
                            className="list"
                            selected={this.state.selectedIndex === 0}
                            onClick={(event) =>
                              this.handleListItemClick(event, 0)
                            }
                          >
                            <ListItemText primary="Inbox" />
                          </ListItem>
                        </List>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <img src={logo} width="30%" alt="logo" /> */}

                  <div className="py-4 mb-4">
                    <Button
                      component={NavLink}
                      to="/DashboardCommerce"
                      size="large"
                      className="btn-pill shadow-second-sm btn-danger"
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </span>
                      <span className="btn-wrapper--label">Get Started</span>
                    </Button>
                    <Button
                      // href="/profile/buyProducts"
                      onClick={(e) => this.handleProducts(e)}
                      // href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
                      rel="noopener noreferrer"
                      target="_blank"
                      size="large"
                      className="bg-white-10 text-white shadow-second-sm btn-pill ml-3"
                    >
                      <span>Product Details</span>
                    </Button>
                  </div>
                </Grid>
                <Grid item lg={10} className="mx-auto">
                  <div className="p-4 p-xl-5 hover-scale-rounded bg-second rounded-lg modal-content">
                    {/* <Grid container spacing={0}> */}
                    <Slider
                      {...marketingTestimonials1}
                      className="row slider-arrows-outside slider-arrows-dark slider-dots-outside"
                    >
                      {details.map((allDetails, index) => (
                        <div key={index}>
                          {/* // <Grid item xs={6} md={3} className="p-3"> */}
                          <div className="divider-v bg-white-10 divider-v-md d-none d-lg-block" />
                          <div className="text-center">
                            <div className="d-flex align-content-center justify-content-center">
                              {/* <TrendingUpTwoToneIcon className="d-30 text-danger" /> */}
                              <img
                                height="50px"
                                width="50px"
                                src={allDetails.image}
                              />
                            </div>
                            <div className="mt-3 line-height-sm">
                              {/* <b></b> */}
                              {/* <b className="font-size-xxl pb-2">1000+</b> */}
                              <span className="text-white-50 font-size-lg d-block">
                                {allDetails.name}
                              </span>
                            </div>
                          </div>
                          {/* <Card
                              className="col-md-11"
                              style={{ width: "8rem" }}
                            >
                              <Card.Img
                                height="130px"
                                width="50px"
                                variant="top"
                                src={allDetails.image}
                              />
                              <Card.Body height="50%">
                                <Card.Title>{allDetails.name}</Card.Title>
                                <Card.Text>{allDetails.description}</Card.Text>
                                <Button
                                  onClick={(e) => this.handleProducts(e)}
                                  variant="primary"
                                >
                                  Buy
                                </Button>
                              </Card.Body>
                            </Card> */}
                          {/* // </Grid> */}
                        </div>
                      ))}
                    </Slider>
                    {/* </Grid> */}
                  </div>
                </Grid>
              </Container>
              <div className="shadow-container-blocks-5 z-below">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="var(--light)"
                    fillOpacity="1"
                    d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
