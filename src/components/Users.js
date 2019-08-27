import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoading: true
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ users: data, isLoading: false }))
    }
    render() {
        const { users, isLoading } = this.state
        if(isLoading){
            return <p>Loading..</p>
        }
        return (
            <div>
                <p>Halaman User</p>
                <table border="1">
                    <th>ID</th>
                    <th>Name</th>
                    {
                        users.map((data, index)=>
                        <tr>
                            <td>{index}</td>    
                            <td key={index}><Link to={"/users/"+data.name}>{data.name}</Link></td>    
                        </tr>
                        )
                    }
                </table>
            </div>
        )
    }
}