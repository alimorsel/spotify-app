import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {artistLoaded, artistLoading, setErrors} from "../action/ArtistSearchAction";
import RouteConfig from "../../../common/navigation/RouteConfig";
import {findArtist} from "../api/Service";
import SearchBox from "./common/SearchBoxComponent";
import {css, StyleSheet} from 'aphrodite';
import Loader from 'react-loader-spinner'
import Color from "../../../common/environment/Color";
import StarRatings from 'react-star-ratings';
import {parse, stringify} from 'query-string'

const BrowsingArtistComponent = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const artistSearchData = useSelector(state => state.artistSearchData)


    if (artistSearchData.isLoading == true) {
        findArtist(artistSearchData.searchParams)
            .then((response) => {
                dispatch(artistLoaded(response))
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {

        const searchParams = parse(props.location.search);

        if (searchParams && searchParams.q)
            dispatch(artistLoading(searchParams));
        else
            history.push(RouteConfig.ArtistSearch.path)

    }, [])

    const onClick = () => {
        if (artistSearchData.searchParams.q) {
            dispatch(artistLoading(artistSearchData.searchParams));
        } else {
            const errors = {
                search: "this field must be not empty"
            }
            dispatch(setErrors(errors));
        }
    }

    const onItemClick = (artistId, artistName) => {
        history.push({
            pathname: RouteConfig.BrowsingAlbum.path,
            search: stringify({
                artistId,
                artistName
            })
        });
    }

    const onTypeChanged = selectedValues => {
        artistSearchData.searchParams.type = selectedValues.map(value => value.value).join(",");
    }

    let listArtists = null;
    if (artistSearchData.artists && artistSearchData.artists.length) {
        listArtists = artistSearchData.artists.map(artist => {
            return (
                <div key={artist.id} className={css(style.item)} onClick={() => onItemClick(artist.id, artist.name)}>
                    <div className={css(style.itemImage)}>
                        {
                            artist.images[0] ? (
                                <img width={200} height={180} src={artist.images[0] ? artist.images[0].url : {}}/>
                            ) : (
                                <div className={css(style.defaultImage)}/>
                            )
                        }

                    </div>
                    <div className={css(style.itemName)}>
                        {artist.name}
                    </div>
                    <div className={css(style.itemFollowers)}>
                        {artist.followers.total} followers
                    </div>
                    <div className={css(style.itemRate)}>
                        <StarRatings
                            rating={Math.floor(artist.popularity / 20)}
                            starRatedColor="gold"
                            starEmptyColor={Color.darkPrimary}
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={css(style.container)}>
            <div className={css(style.searchBox)}>
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
            {
                artistSearchData.isLoading ? (
                    <div className={css(style.loading)}>
                        <Loader
                            type="Puff"
                            color={Color.primary}
                            height={100}
                            width={100}
                            timeout={10000}

                        />
                    </div>
                ) : (
                    <div className={css(style.content)}>
                        {listArtists}
                    </div>
                )
            }

        </div>
    );
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column"
    },
    searchBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        height: "100%",
        marginTop: "30px",
        display: "flex",
        flexWrap: "wrap",
    },
    loading: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        cursor: "pointer",
        marginRight: "15px",
        marginBottom: "10px",
        width: "200px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid " + Color.darkPrimary,
    },
    itemImage: {},
    itemFollowers: {
        paddingLeft: "10px",
        color: Color.darkPrimary,
        paddingRight: "5px",
        wordBreak: "break-all",
    },
    itemName: {
        paddingLeft: "10px",
        paddingRight: "5px",
        wordBreak: "break-all",
        fontWeight: "bold",
        fontSize: "18px"
    },
    itemRate: {
        paddingLeft: "10px",
        marginTop: "15px",
        paddingBottom: "10px"
    },
    defaultImage: {
        width: "200px",
        height: "180px",
        backgroundColor: Color.primary
    }

});

export default BrowsingArtistComponent;
