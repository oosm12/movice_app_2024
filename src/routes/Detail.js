import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail(props) {
    const location = useLocation();
    const navgate = useNavigate();

    useEffect(() => {
        if (location.state == null) {
            return navgate('/')
        }
    },[])

    if (location.state) {
        return <span>{location.state.title}</span>;

    } else {
        return null;
    }
}

export default Detail;