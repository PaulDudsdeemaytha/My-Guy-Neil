import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AccountsUIWrapper from "../../AccountsUIWrapper.js";
import MessageList from "./MessageList";
import Message from "./Message";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <MessageList />
      </div>
    );
  }
}

export default Login;

// onSubmit(e) {
//   e.preventDefault();
//   var ele = $(e.target);
//   //get our values input
//   var email = ele.find("#email").val();
//   var password = ele.find("#password").val();
//   var confirmPassword = ele.find("#confirmPassword").val();
//   //Log the user in
//   Meteor.loginWithPassword(email, password, er => {
//     if (er) {
//       alert(er.reason);
//     } else {
//       return <Redirect to="/" />;
//     }
//   });
// }        <AccountsUIWrapper />
/* <form onSubmit={this.onSubmit} className="login">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" name="confirmPassword" />
          <input type="submit" value="Login" />
        </form>
        <input type="button" value="Register now!" /> */
