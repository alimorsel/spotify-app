import {ArtistSearchActionType} from '../type/ArtistSearchActionType'
import {SearchType} from "../const/SearchType";

const initialState = {
    searchParams: {
        q: "",
        type: SearchType.ARTIST
    },
    isLoading: false,
    artists: [],
    errors: {
        search: null
    }
}

const ArtistSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ArtistSearchActionType.ARTIST_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                searchParams: {
                    ...action.payload.searchParams
                },
                errors: {
                    search: null
                }
            }
        case ArtistSearchActionType.ARTIST_LOADED:
            return {
                ...state,
                artists: action.payload.artists,
                isLoading: false,
                errors: {
                    search: null
                }
            }
        case ArtistSearchActionType.VALIDATION_ERR:
            return {
                ...state,
                errors: action.payload.errors
            }
        default :
            return state;
    }
}


export default ArtistSearchReducer;