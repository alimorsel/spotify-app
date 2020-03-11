import {ArtistSearchActionType} from "../type/ArtistSearchActionType"

export const search = (q) => {
    return {
        type: ArtistSearchActionType.SEARCH,
        payload: {
            q
        }
    }
}

export const artistLoading = (q) => {

    return {
        type: ArtistSearchActionType.ARTIST_LOADING,
        payload: {
            isLoading: true,
            q
        }
    }
}

export const artistLoaded = (response) => {
    return {
        type: ArtistSearchActionType.ARTIST_LOADED,
        payload: {
            artists: response.data.artists.items
        }
    }
}

export const setErrors = (errors) => {
    return {
        type: ArtistSearchActionType.VALIDATION_ERR,
        payload: {
            errors: errors
        }
    }
}