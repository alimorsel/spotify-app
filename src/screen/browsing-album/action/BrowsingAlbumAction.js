import {BrowsingAlbumSearchActionType} from "../type/BrowsingAlbumActionType";

export const artistAlbumLoading = (artistId, artistName) => {
    return {
        type: BrowsingAlbumSearchActionType.ARTIST_ALBUM_LOADING,
        payload: {
            artistId,
            artistName
        }
    }
}

export const artistAlbumLoaded = (response) => {
    return {
        type: BrowsingAlbumSearchActionType.ARTIST_ALBUM_LOADED,
        payload: {
            albums: response.data.items
        }
    }
}