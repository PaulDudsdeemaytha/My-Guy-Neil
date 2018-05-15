import React, { Component } from "react";

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <h2 class="login-form">Account Login</h2>
        <form>
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email Address"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Password"
          />
          <button
            type="submit"
            id="login-btn"
            class="btn btn-lg btn-primary btn-block"
          >
            Log In
          </button>
          <p>
            No Account? <a href="/signup">Create Account</a>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
