import React from "react";

export class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>SignIn with Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          ></input>
          <label>Password</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          ></input>
          <input type="submit" value="Submit Form"></input>
        </form>
      </div>
    );
  }
}
