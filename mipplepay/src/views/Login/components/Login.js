// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Button,
//   TextField,
//   InputAdornment,
//   Container,
// } from "@material-ui/core";
// import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
// import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
// import hero6 from "../../../assets/images/Pavers.svg";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const Login = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//     msg: null,
//   });
//   const [formErrors, setFormErrors] = useState({
//     emails: "",
//     passwords: "",
//   });

//   const { email, password } = values;
//   const { emails, passwords } = formErrors;

//   const handleChange = (name) => (e) => {
//     const { value } = e.target;
//     // let formErrors = { ...formErrors };

//     console.log(name, value);

//     switch (name) {
//       case "email":
//         formErrors.emails = emailRegex.test(value)
//           ? ""
//           : "Invalid email address";
//         break;
//       case "password":
//         formErrors.passwords =
//           value.length < 6 ? "minimum of 6 charcter required" : "";
//         break;
//       default:
//         break;
//     }
//     // this.setState({ formErrors, [name]: value });
//     setFormErrors({ ...formErrors });
//     setValues({ ...values, [name]: value });
//   };

//   return (
//     <>
//       <Grid item md={9} lg={9} xl={7} className="mx-auto p-5">
//         <div className="text-center">
//           <h1 className="display-4 mb-1 font-weight-bold">Login</h1>
//           {/*   <img src={hero6} width="110" /> */}
//           <p className="font-size-lg mb-4 text-black-50">
//             Fill in the fields below to get started
//           </p>
//         </div>
//         <div>
//           <div className="mb-4">
//             <TextField
//               fullWidth
//               variant="outlined"
//               id="textfield-email"
//               value={email || ""}
//               name="email"
//               onChange={handleChange("email")}
//               label="Email address"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <MailOutlineTwoToneIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             {formErrors.emails.length > 0 && (
//               <span className="errorMessage">{formErrors.emails}</span>
//             )}
//           </div>
//           <div className="mb-3">
//             <TextField
//               fullWidth
//               variant="outlined"
//               name="password"
//               value={password || ""}
//               id="textfield-password"
//               onChange={handleChange("Password")}
//               type="password"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockTwoToneIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             {formErrors.passwords.length < 6 && (
//               <span className="errorMessage">{formErrors.passwords}</span>
//             )}
//           </div>
//           <div className="d-flex justify-content-between align-items-center font-size-md">
//             <div>
//               <a
//                 href="#/"
//                 onClick={(e) => e.preventDefault()}
//                 className="text-first"
//               >
//                 Recover password
//               </a>
//             </div>
//           </div>
//           <div className="text-center py-4">
//             <Button className="bg-primary font-weight-bold w-50 my-2 text-white">
//               Sign in
//             </Button>
//           </div>
//         </div>
//       </Grid>
//     </>
//   );
// };
// export default Login;

import React, { Component } from "react";
// import "../css/Login.css";
import {
  Form,
  Button,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import { signin } from "../../../_action/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../../../_action/errorAction";
import { Link } from "react-router-dom";
import { showLoader, hideLoader } from "../../../_action/loading";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
// import "../css/styleCard.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: null,
      redirect: false,
      formErrors: {
        email: "",
        password: "",
      },
    };
  }

  static propType = {
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.props.hideLoader();
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // if authenticated redirect
    if (isAuthenticated) {
      this.setState({ redirect: true });
      this.sendRedirect();
      this.props.hideLoader();
      // console.log(this.props.authUser.user.user.role);
      if (this.props.authUser.user.user.role === 0) {
        // this.props.history.push("/profile/admin");
        const redirect = localStorage.getItem("productLink");
        window.location.href = `${redirect}`;
      } else {
        // const redirect = localStorage.getItem("productLink");
        // window.location.href = `${redirect}`;
        console.log("admin");
        // this.props.history.push("/profile/dashboard");
      }
    }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (e) => {
    const { value } = e.target;
    let formErrors = { ...this.state.formErrors };
    console.log(name, value);

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum of 6 charcter required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    // console.log(user);
    this.props.signin(user);
    // this.props.showLoader();
    // setTimeout(() => {
    // }, 2000);
  };

  handleForgotPassword = (e) => {
    e.preventDefault();
    this.props.history.push("/forgotpassword");
  };
  render() {
    const { formErrors } = this.state;
    return (
      <Grid item md={9} lg={9} xl={7} className="mx-auto pt-5">
        <div className="text-center">
          <h1 className="display-4 mb-1 font-weight-bold">Login</h1>
          {/*   <img src={hero6} width="110" /> */}
          <p className="font-size-lg mb-4 text-black-50">
            Fill in the fields below to get started
          </p>
        </div>
        <div>
          <div className="mb-4">
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              value={this.state.email || ""}
              id="textfield-email"
              onChange={this.handleChange("email")}
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineTwoToneIcon />
                  </InputAdornment>
                ),
              }}
            />
            {formErrors.email.length > 0 && (
              <div className="text-center">
                <span className="text-danger">{formErrors.email}</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <TextField
              fullWidth
              variant="outlined"
              name="password"
              value={this.state.password || ""}
              id="textfield-password"
              onChange={this.handleChange("password")}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockTwoToneIcon />
                  </InputAdornment>
                ),
              }}
            />
            {formErrors.password.length > 0 && (
              <div className="text-center">
                <span className="text-danger">{formErrors.password}</span>
              </div>
            )}
          </div>
          <div className="text-center">
            <small className="small">
              Don't have an account? <Link to="/register">Signup</Link>
            </small>
          </div>
          <div className="mt-3 d-flex justify-content-space-between mb-5">
            <Button
              onClick={(e) => this.handleSubmit(e)}
              className="bg-primary font-weight-bold w-50 my-2 text-white"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="bg-light font-weight-bold w-50 my-2 text-dark"
              onClick={(e) => this.handleForgotPassword(e)}
              style={{
                marginLeft: "7%",
              }}
            >
              Forgot password
            </Button>
          </div>
          <div className="text-center">
            <Link to="/">Back Home</Link>
          </div>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default connect(mapStateToProps, {
  signin,
  clearErrors,
  showLoader,
  hideLoader,
})(Login);
