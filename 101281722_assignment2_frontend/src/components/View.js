import React, { Component } from "react";
import axios from 'axios';

export default class View extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            lastName: "",
            firstName: "",
            emailId: "",
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

    
    


    
    render() {
        return (
            <div>
            <h3 align="center">View Employee Details</h3>
            <p>Employee First Name:  {this.state.firstName}</p>
            <p>Employee Last Name:  {this.state.lastName}</p>
            <p>Employee Email ID:  {this.state.emailId}</p>
            </div>
        )
    }
}
