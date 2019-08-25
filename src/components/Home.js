import React, { Component } from 'react';

// Class Component
export default class Home extends Component {
    // Lifecycle
    constructor(){
        super();
        this.state = {
            count: 0
        }
        console.log("constructor");
    }
    componentWillMount(){
        console.log("willMount");
    }
    componentDidMount(){
        console.log("didMount");
    }
    handleClick(){
        alert('Clicked')
        const { count } = this.state
        this.setState({count:count+1})
    }
    render(){
        console.log("render");
        const { count } = this.state
        return(
            <div>
                <p>Hallo World, {this.props.msg}</p>
                <button onClick={()=>this.handleClick()}>Click Me!</button>
                <h2>{count}</h2>
            </div>
        )
    }
}

// Functional Component
// const Home = ()=> {
//     return (
//         <div>
//             <p>Functional Component</p>
//         </div>
//     )
// }
// export default Home;