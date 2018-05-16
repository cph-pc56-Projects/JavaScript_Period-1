import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
//http://127.0.0.1:3000/api/users

class App extends React.Component {

    static async getInitialProps() {
        const res = await fetch("http://127.0.0.1:3000/api/users");
        const users = await res.json();
        
        return { users }
    }

    render() {
        return (
            <div>
                <p>Main Index Page </p>
                <p>{this.props.users[0].firstName}</p>
            </div>
        )
    }
}

export default App;