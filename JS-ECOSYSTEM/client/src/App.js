import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, VIEW_USERS } from "./Queries/queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

function App() {
    // getting all users
    const getAllUsers = useQuery(GET_USERS);
    // getting specific user
    const userInfo = useQuery(VIEW_USERS, { variables: { id: 1 }});
    if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
    if (getAllUsers.error || userInfo.error) return <React.Fragment>Error :</React.Fragment>;

    return (
        <div className="container">
            <Card>
                <CardHeader>Query - Displaying all data</CardHeader>
                <CardBody>
          <pre>
            {JSON.stringify(getAllUsers.data, null, 2)}
          </pre>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Query - Displaying data with args</CardHeader>
                <CardBody>
                    <CardSubtitle>Viewing a user by id</CardSubtitle>
                    <pre>
            {JSON.stringify(userInfo.data, null, 2)}
          </pre>
                </CardBody>
            </Card>
        </div>
    )
}
export default App;
