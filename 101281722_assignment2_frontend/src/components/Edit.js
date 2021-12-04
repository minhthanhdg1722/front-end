import React, { Component } from "react";
import axios from 'axios';

export default class Edit extends Component {
    
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
            employees: [],
        };
    }
    
    componentDidMount() {
        axios
            .get("http://localhost:9090/api/v1/employees/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailId: response.data.emailId,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
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
        console.log(employee);

        axios
            .put(
                "http://localhost:9090/api/v1/employees/" + this.props.match.params.id,
                employee
            )
            .then((res) => console.log(res.data));
            this.props.history.push("/");
    }

    render() {
        return (
            <div>
            <h3 align="center">Update Record</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>First Name </label>
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
            <br />
    
            <div className="form-group">
                <input
                type="submit"
                value="Update Record"
                className="btn btn-primary"
                />
            </div>
            </form>
    </div>
        )
    }
}
