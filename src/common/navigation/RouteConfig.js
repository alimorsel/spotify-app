import LoginComponent from "../../screen/login/component/LoginComponent"
import ArtistSearchComponent from "../../screen/artist-search/component/ArtistSearchComponent"
import BrowsingArtistComponent from "../../screen/artist-search/component/BrowsingArtistComponent"
import BrowsingAlbumComponent from "../../screen/browsing-album/component/BrowsingAlbumComponent";
import {withRouter} from 'react-router-dom';

const RouteConfig = {
    Login: {path: "/", component: LoginComponent},
    ArtistSearch: {path: "/artistSearch", component: withRouter(ArtistSearchComponent)},
    BrowsingArtist: {path: "/browsingArtist", component: withRouter(BrowsingArtistComponent)},
    BrowsingAlbum: {path: "/browsingAlbum", component: withRouter(BrowsingAlbumComponent)},
}

export default RouteConfig;