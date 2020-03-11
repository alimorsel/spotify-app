import React from "react";
import axios from "axios"


export const axiosInstance = axios.create();

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && isValidToken(user)) {
            request.headers["Authorization"] = user.token_type + " " + user.access_token;
        } else {
            localStorage.removeItem("user");
            /**
             * todo navigate to login
             */
        }

    }
    return request
}

const isValidToken = (user) => {
    return user.expiry_date > Date.now()
}

axiosInstance.interceptors.request.use(
    request => requestHandler(request)
)