import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_NAMES = gql`
  {
    getAllUsers {
        firstName
    }
  }
`;

const NAMES = ({ names }) => (
    <Query query={GET_NAMES}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            console.log('data', data)
            return (
                <div>
                    {data}
                </div>
            );
        }}
    </Query>
);

export default NAMES;