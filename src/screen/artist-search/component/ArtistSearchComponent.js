import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom";
import {setErrors} from "../action/ArtistSearchAction";
import RouteConfig from "../../../common/navigation/RouteConfig"
import SearchBox from "./common/SearchBoxComponent";

const ArtistSearchComponent = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const artistSearchData = useSelector(state => state.artistSearchData)

    const onClick = () => {
        //dispatch(search(artistSearchData.searchParams.q))

        if (artistSearchData.searchParams.q) {
            history.push({
                pathname: RouteConfig.BrowsingArtist.path,
                q: artistSearchData.searchParams.q
            });
        } else {
            const errors = {
                search: "this field must be not empty"
            }
            dispatch(setErrors(errors));
        }
    }

    return (
        <div style={style.container}>

            <SearchBox
                error={artistSearchData.errors.search}
                onTextChanged={(e) => {
                    artistSearchData.searchParams.q = e.target.value
                }}
                onClick={() => onClick()}
            />
        </div>
    );

}

const style = {
    container: {
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default ArtistSearchComponent;