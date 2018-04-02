import React, { Component } from 'react';


class Index extends Component {
    state = {
        user: {}
    }   
    async getInitialProps(req){
        // console.log('Request mongoDB', req.mongoDB)
        console.log(req.req.mongoDB.User.find({}, result => result))
    }

    

    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}
export default Index;