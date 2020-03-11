import loggedReducer from '../../screen/login/reducer/LoggedReducer'
import ArtistSearchReducer from '../../screen/artist-search/reducer/ArtistSearchReducer'
import {BrowsingAlbumReducer} from "../../screen/browsing-album/reducer/BrowsingAlbumReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    artistSearchData: ArtistSearchReducer,
    artistAlbumData: BrowsingAlbumReducer
});

export default rootReducer;