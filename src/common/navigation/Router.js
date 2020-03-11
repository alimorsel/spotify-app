import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import RouteConfig from "./RouteConfig";

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={RouteConfig.Login.path} component={RouteConfig.Login.component}/>
                    <Route exact path={RouteConfig.ArtistSearch.path} component={RouteConfig.ArtistSearch.component}/>
                    <Route exact path={RouteConfig.BrowsingArtist.path}
                           component={RouteConfig.BrowsingArtist.component}/>
                    <Route exact path={RouteConfig.BrowsingAlbum.path} component={RouteConfig.BrowsingAlbum.component}/>
                </Switch>
            </BrowserRouter>
        );
    }
}