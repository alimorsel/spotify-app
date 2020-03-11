import {ArtistSearchActionType} from '../type/ArtistSearchActionType'

const initialState = {
    searchParams: {
        q: "",
        type: "artist"
    },
    isLoading: false,
    artists: [],
    errors: {
        search: null
    }
}

const ArtistSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ArtistSearchActionType.SEARCH :
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    q: action.payload.q
                },
                errors: {
                    search: null
                }
            };
        case ArtistSearchActionType.ARTIST_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                searchParams: {
                    ...state.searchParams,
                    q: action.payload.q
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