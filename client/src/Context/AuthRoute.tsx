import React from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./AuthContext";

export default function AuthRoute(props: React.PropsWithChildren<unknown>) {
    const authContext = React.useContext(Context);
    if (!authContext.isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {props.children}
        </>
    );
}
