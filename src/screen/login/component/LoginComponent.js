import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {signInFailed, signInSuccess} from "../action/LoginAction"
import {Config} from "../../../common/environment/Config"
import SpotifyLogin from 'react-spotify-login';
import {useHistory} from "react-router-dom";
import RouteConfig from "../../../common/navigation/RouteConfig"
import {css, StyleSheet} from 'aphrodite';
import Color from "../../../common/environment/Color";
import {FaSpotify} from "react-icons/fa"

const LoginComponent = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const isLoggedState = useSelector(state => state.isLogged)

    console.log(isLoggedState)

    useEffect(() => {

        if (isLoggedState.isLogged && localStorage.getItem("user"))
            history.push(RouteConfig.ArtistSearch.path);

    }, [isLoggedState, history]);

    const onSuccess = response => {
        dispatch(signInSuccess(response));
    }
    const onFailure = response => dispatch(signInFailed(response));

    return (
        <div className={css(style.container)}>

            <SpotifyLogin clientId={Config.SPOTIFY_CLIENT_ID}
                          redirectUri={Config.SPOTIFY_REDIRECT_URI}
                          className={css(style.login)}
                          onSuccess={onSuccess}
                          onFailure={onFailure}>
                <div className={css(style.text)}>
                    Login
                </div>
                <div className={css(style.icon)}>
                    <FaSpotify/>
                </div>
            </SpotifyLogin>

        </div>
    );
}

const style = StyleSheet.create({
    container: {
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    login: {
        display: "flex",
        height: "70px",
        width: "400px",
        border: "1px solid " + Color.darkPrimary,
        borderRadius: "5px",
        padding: "9px",
        alignItems: "center",
        backgroundColor: "transparent",
        fontWeight: "bold",
        justifyContent: "Center",
        fontSize: "20px"

    },
    text: {
        textAlign: "center",
        flexGrow: "1",
    },
    icon: {
        height: "100%",
        width: "15%",
        fontSize: "45px",
        color: "#1ed760"
    }
});

export default LoginComponent;

