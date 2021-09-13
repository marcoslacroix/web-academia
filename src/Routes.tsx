
import ForgotPassword from 'components/ForgotPassword';
import Login from 'components/Login';
import ResetPassword from 'components/ResetPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Login />
                </Route>
                <Route path="/forgotPassword">
                    <ForgotPassword/>
                </Route>
                <Route exact path="/resetPassword">
                    <ResetPassword/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
