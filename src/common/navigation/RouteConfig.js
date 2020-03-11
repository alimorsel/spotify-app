import LoginComponent from "../../screen/login/component/LoginComponent"
import ArtistSearchComponent from "../../screen/artist-search/component/ArtistSearchComponent"
import BrowsingArtistComponent from "../../screen/artist-search/component/BrowsingArtistComponent"
import BrowsingAlbumComponent from "../../screen/browsing-album/component/BrowsingAlbumComponent";


const RouteConfig = {
    Login: {path: "/", component: LoginComponent},
    ArtistSearch: {path: "/artistSearch", component: ArtistSearchComponent},
    BrowsingArtist: {path: "/browsingArtist", component: BrowsingArtistComponent},
    BrowsingAlbum: {path: "/browsingAlbum", component: BrowsingAlbumComponent},
}

export default RouteConfig;