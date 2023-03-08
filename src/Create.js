import React, {Component} from "react";
import axios from 'axios';
import './Create.css'


class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            product_id: '',
            brand: '',
            model:'',
            ram: '',
            processor:'',
            rom:'',
            graphics_card:''
         };
        }

 handleaccidchange = (event) => {
     this.setState({product_id:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({brand: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({model: event.target.value});
     };


    handlebranchchange = (event) => {
        this.setState({ram: event.target.value});
    };


    handlemobilechange = (event) => {
        this.setState({processor: event.target.value});
    };


    handlemailidchange = (event) => {
        this.setState({rom: event.target.value});
    };

    handlegraphics_card = (event) => {

            this.setState({graphics_card: event.target.value});
        };




    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            product_id : this.state.product_id,
            brand: this.state.brand,
            model: this.state.model,
            ram: this.state.ram,
            processor: this.state.processor,
            rom: this.state.rom,
            graphics_card: this.state.graphics_card
        };
        axios.post('http://127.0.0.1:8080/add', data)
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Product Id</label>
                <input 
                    className="login-input"
                    type="number"
                    value={this.state.product_id}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">Brand</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.brand}
                    onChange={this.handleclientnamechange}
                />
                <label className="login-label">Model</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.model}
                    onChange={this.handlebanknamechange}
                />
                <label className="login-label">RAM</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.ram}
                    onChange={this.handlebranchchange}
                />
                <label className="login-label">PROCESSOR</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.processor}
                    onChange={this.handlemobilechange}
                />
                <label className="login-label">ROM</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.rom}
                    onChange={this.handlemailidchange}
                />
<label className="login-label">Graphics Card</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.graphics_card}
                    onChange={this.handlegraphics_card}
                />
                
                <button className="login-button" type="submit">SUBMIT</button>
            </form>
        )
    }
}


export default Create;