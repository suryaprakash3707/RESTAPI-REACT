import React, {Component} from "react";
import axios from 'axios';
import './Create.css'
import {Navigate} from 'react-router-dom';
import { useParams } from "react-router-dom";


class Update extends Component {
    state = {
        data: [],
        update: false
    }
    
    // componentDidMount() {
    //     const {match} = this.props;
    //     const id = match.params.id;
    //     axios.get(`http://127.0.0.1:8080/get/${id}`).then(response =>{this.setState({data: response.data});
    //     console.log(this.props.params.id);
    // })
    // .catch(error => {console.log(error);
    // });
    // }
    
    handleaccidchange = (event) => {
        this.setState({booking_id:event.target.value});   
       };
   
   
    handleclientnamechange = (event) => {
        this.setState({Customer_name: event.target.value});
       };
   
   
    handlebanknamechange = (event) => {
        this.setState({Movie_Name: event.target.value});
        };
   
   
       handlebranchchange = (event) => {
           this.setState({Timings: event.target.value});
       };
   
   
       handlemobilechange = (event) => {
           this.setState({mobile_no: event.target.value});
       };
   
   
       handlemailidchange = (event) => {
           this.setState({Fare: event.target.value});
       };
   
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
                        booking_id : this.state.booking_id,
                        Customer_name: this.state.Customer_name,
                        Movie_Name: this.state.Movie_Name,
                        Timings: this.state.Timings,
                        mobile_no: this.state.mobile_no,
                        Fare: this.state.Fare,
                        submitted: true
                    };
        this.setState({submitted: true});
        axios.put(`http://127.0.0.1:9876/update/${this.state.booking_id}`, data)
        console.log(data);
    };
    render(){
        // console.log(this.props.id);
        return(
            <>
            {
                this.state.submitted && <Navigate to="/Table"/>
            }
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Booking id</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Booking ID"
                    value={this.state.booking_id}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">Customer Name</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.Customer_name}
                    placeholder="Please Enter the Customer Name"
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Movie Name</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Movie Name"
                    value={this.state.Movie_Name}
                    onChange={this.handlebanknamechange}
                />
                <label className="login-label">Timings</label>
                <input 
                    className="login-input"
                    type="text"
                    placeholder="Please Enter the Timing"
                    value={this.state.Timings}
                    onChange={this.handlebranchchange}
                />
                <label className="login-label">Mobile Number</label>
                <input 
                    className="login-input"
                    type="number"
                    placeholder="Please Enter your Mobile Number"
                    value={this.state.mobile_no}
                    onChange={this.handlemobilechange}
                />
                <label className="login-label">Fare</label>
                <input 
                    className="login-input"
                    type="number"
                    placeholder="Please Enter the fare"
                    value={this.state.Fare}
                    onChange={this.handlemailidchange}
                />
                
                <button className="login-button" type="submit">Add</button>
            </form>
            </>
        )
    }
}

export default Update;