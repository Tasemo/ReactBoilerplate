import React from "react";
import { Navigate } from 'react-router-dom';
import { Context } from "./AuthContext";

type Props = {
    element: React.ReactElement;
}

export default function TempRoute(props: Props) {
    const authContext = React.useContext(Context);
    if (authContext.isAuthenticated()) {
        const target = authContext.getTarget();
        return <Navigate to={target || "/"} replace />
    }
    return props.element;
}