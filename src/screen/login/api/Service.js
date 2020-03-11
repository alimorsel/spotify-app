import {Config} from "../../../common/environment/Config"
import {ApiName} from "./Config"
import {LoginRequestParams} from "../dto/request/LoginRequest";


export const login = () => {
    const url = new URL(Config.SPOTIFY_AUTH_URL + ApiName.authorize);
    const header = {
        "Access-Control-Allow-Origin": "*"
    }
    LoginRequestParams.client_id = Config.SPOTIFY_CLIENT_ID;
    LoginRequestParams.redirect_uri = Config.SPOTIFY_REDIRECT_URI;
    LoginRequestParams.response_type = "token";
    LoginRequestParams.scope = "user-read-private user-read-email";
    LoginRequestParams.state = "123";

    // axios(url, { params: LoginRequestParams, headers: {header},mode: "no-core"   })
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    Object.keys(LoginRequestParams).forEach(key => {
        if (LoginRequestParams[key] != null)
            url.searchParams.append(key, LoginRequestParams[key])
    })

    // fetch(url, {
    //     method:"GET",
    //     headers:{}
    // })
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
}

