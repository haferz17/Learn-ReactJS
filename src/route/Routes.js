import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from '../components/Home';
import Users from '../components/Users';

function home(){
    return <Home/>
}
function users(){
    return (
        <div>
            <Users/>
        </div>
    )
}
function userInfo({match}){
    return <p>Nama : {match.params.name}</p>
}
function notFound(){
    return <p>404, Halaman tidak ditemukan</p>
}
export default class Routes extends Component {
    
    render(){
        return(
            <BrowserRouter>
                <div>
                    <nav>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">User</Link></li>
                    </nav>
                    <main>
                        <Switch>
                            <Route path="/" exact component={home}/>
                            <Route path="/users" exact component={users}/>
                            <Route path="/users/:name" exact component={userInfo}/>
                            <Route component={notFound}/>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}