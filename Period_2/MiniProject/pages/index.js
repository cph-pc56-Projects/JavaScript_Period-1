import React, { Component } from 'react';


class Index extends Component {

    static async getInitialProps({ req }) {
        if (req) {
            const { db } = req
            const list = await db.collection('User').find({}, { firstName: 1, lastName: 1 });
            return { list }
        }

        const { list } = await superagent.get('http://localhost:3000/api')
            .then(res => res.body)

        return { list }
    }

    render() {
        console.log('Trying to get users here: ', this.state.list);
        return (
            <h1>Hello World!</h1>
        )
    }
}
export default Index;