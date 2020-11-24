import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import UsersListPage from '../features/usersList/UsersListPage';
import UsersDetailsPage from "../features/userDetails/UsersDetailsPage";
import {Container} from '@chakra-ui/react';
import {useSelector} from "react-redux";
import {RootState} from "./rootReducer";

const App: React.FC = () => {
    return (
        <Router>
            <Container>
                <Switch>
                    <Route path="/user/:userId">
                        <UsersDetailsPage />
                    </Route>
                    <Route path="/">
                        <UsersListPage />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
