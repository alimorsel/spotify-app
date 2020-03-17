import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom";
import {setErrors} from "../action/ArtistSearchAction";
import RouteConfig from "../../../common/navigation/RouteConfig"
import SearchBox from "./common/SearchBoxComponent";
import {stringify} from 'query-string'


const ArtistSearchComponent = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const artistSearchData = useSelector(state => state.artistSearchData)

    const onClick = () => {

        if (artistSearchData.searchParams.q) {
            history.push(RouteConfig.BrowsingArtist.path + "?" + stringify(artistSearchData.searchParams));
        } else {
            const errors = {
                search: "this field must be not empty"
            }
            dispatch(setErrors(errors));
        }
    }

    const onTypeChanged = selectedValues => {
        artistSearchData.searchParams.type = selectedValues.map(value => value.value).join(",");
    }

    return (
        <div style={style.container}>

            <SearchBox
                error={artistSearchData.errors.search}
                defaultValue={artistSearchData.searchParams.q}
                onTextChanged={(e) => {
                    artistSearchData.searchParams.q = e.target.value
                }}
                onClick={() => onClick()}
                onTypeChanged={e => onTypeChanged(e)}
                selectedSearchType={artistSearchData.searchParams.type}
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