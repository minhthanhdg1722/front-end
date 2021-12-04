import React, { Component } from "react";
import axios from 'axios';


export default class Create extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailId = this.onChangeEmailId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            lastName: "",
            firstName: "",
            emailId: "",
        };
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value,
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value,
        });
    }

    onChangeEmailId(e) {
        this.setState({
            emailId: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const employee = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            emailId: this.state.emailId
        };
        axios
            .post("http://localhost:9090/api/v1/employees", employee)
            .then((res) => console.log(res.data));
        this.setState({
            lastName: "",
            firstName: "",
            emailId: "",
        });
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
        <h3>Create New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.emailId}
              onChange={this.onChangeEmailId}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Employee"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
        )
    }
}
