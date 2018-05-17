import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
//http://127.0.0.1:3000/api/users

class App extends React.Component {

    static async getInitialProps() {
        const res = await fetch("http://127.0.0.1:3000/api/users");
        const users = await res.json();
        console.log("users", users)
        return { users };
    }

    displayUsers() {
        const data = this.props.users;
        const final = data.map((user) => {
            return <tr> <td key={user._id}>{`${user.firstName}`}</td><td key={user._id}>{`${user.lastName}`}</td> </tr>

        })
        return final;
    }

    render() {

        // console.log('data', data);
        return (
            <div>
                <p>Main Index Page </p>
                <p>Users:</p>
                <table style={{border: "1px solid grey"}}>
                <tr>
                    <th>First Name </th>
                    <th>Last Name </th>
                </tr>
                {this.displayUsers()}           
                
                
                </table>
            </div>
        )
    }
}

export default App;