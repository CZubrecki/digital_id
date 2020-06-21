import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }: any) {
    const isSignedIn = () => {
        let signedIn = false;
        const token = localStorage.getItem('access_token');
        if (token) {
            signedIn = true;
        }
        return signedIn;
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isSignedIn() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}