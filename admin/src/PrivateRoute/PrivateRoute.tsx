import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }: any) {
    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb: any) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signout(cb: any) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
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