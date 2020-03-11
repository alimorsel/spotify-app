import {BrowsingAlbumSearchActionType} from "../type/BrowsingAlbumActionType";

const initialState = {
    artistId: null,
    artistName: null,
    isLoading: false,
    albums: [],
    errors: {}
}

export const BrowsingAlbumReducer = (state = initialState, action) => {
    switch (action.type) {
        case BrowsingAlbumSearchActionType.ARTIST_ALBUM_LOADING :
            return {
                ...state,
                isLoading: true,
                artistId: action.payload.artistId,
                artistName: action.payload.artistName
            }
        case BrowsingAlbumSearchActionType.ARTIST_ALBUM_LOADED: {
            return {
                ...state,
                isLoading: false,
                albums: action.payload.albums
            }
        }
        default:
            return state;
    }
}