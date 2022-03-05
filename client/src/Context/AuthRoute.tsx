import React from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./AuthContext";

type Props = {
    path: string;
    element: React.ReactElement,
}

export default function AuthRoute(props: Props) {
    const authContext = React.useContext(Context);
    if (!authContext.isAuthenticated()) {
        authContext.setTarget(props.path);
        return <Navigate to={"/login"} replace />;
    }
    return props.element;
}
