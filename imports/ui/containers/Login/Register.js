import React, { Component } from "react";
import { Route, Redirect } from "react-router";

class Register extends Component {
  onSubmit(e) {
    e.preventDefault();
    var ele = $(e.target);
    var email = ele.find("#email").val();
    var password = ele.find("#password").val();
    var confirmPassword = ele.find("#confirmPassword").val();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      var accountInfo = {
        email: email,
        password: password
      };
      //Creating a new user
      Accounts.createUser(accountInfo, function(er) {
        if (er) {
          alert("error was found!");
        } else {
          //redirecting once you login code goes here
          console.log("success!");
          return <Redirect to="/" />;
        }
      });
    } else {
      alert("Your passwords don't match!");
    }
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit} className="register">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" name="confirmPassword" />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
