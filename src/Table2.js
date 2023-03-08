import axios from 'axios';
import React, { Component } from 'react';


class Table2 extends Component {
    state = {
        data: []
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8080/get').then(response =>{this.setState({data: response.data});
    })
    .catch(error => {console.log(error);
    });
    }
deleteData(product_id, e){
    axios.delete(`http://127.0.0.1:8080/del/${product_id}`).then(response => {console.log(response);
    
    const data = this.state.data.filter(item => item.product_id !== product_id);
    this.setState({ data });
})
}

updateData(product_id, e){
    axios.put(`http://127.0.0.1:8080/update/${product_id}`).then(response => {console.log(response);
    
    
})
}   

render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>RAM</th>
                        <th>Processor</th>
                        <th>ROM</th>
                        <th>Graphics Card</th>
                       

                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(laptop => (
                        <tr key={laptop.product_id}>
                            <td>{laptop.product_id}</td>
                            <td>{laptop.brand}</td>
                            <td>{laptop.model}</td>
                            <td>{laptop.ram}</td>
                            <td>{laptop.processor}</td>
                            <td>{laptop.rom}</td>
                            <td>{laptop.graphics_card}</td>
                                                         <td>
                                <button className='btn btn-danger' onClick={(e) => this.deleteData(laptop.product_id, e)}>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.updateData(laptop.product_id, e)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table2;