import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {artistAlbumLoaded, artistAlbumLoading} from "../action/BrowsingAlbumAction";
import {findArtistAlbum} from "../api/Service";
import {css, StyleSheet} from 'aphrodite';
import Loader from 'react-loader-spinner'
import Color from "../../../common/environment/Color";
import {useHistory} from "react-router-dom";
import RouteConfig from "../../../common/navigation/RouteConfig";
import {parse} from 'query-string'

const BrowsingAlbumComponent = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const artistAlbumData = useSelector(state => state.artistAlbumData)

    if (artistAlbumData.isLoading) {
        findArtistAlbum(artistAlbumData.artistId)
            .then((response) => {
                dispatch(artistAlbumLoaded(response))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {

        const searchParams = parse(props.location.search);

        if (searchParams.artistId && searchParams.artistName)
            dispatch(artistAlbumLoading(searchParams.artistId, searchParams.artistName))
        else
            history.push(RouteConfig.ArtistSearch.path);
    }, []);


    let listArtistAlbum = null;
    if (artistAlbumData.albums && artistAlbumData.albums.length) {
        listArtistAlbum = artistAlbumData.albums.map(album => {
            return (
                <div key={album.id} className={css(style.item)}>
                    <div className={css(style.itemImage)}>
                        {
                            album.images[0] ? (
                                <img width={200} height={180} src={album.images[0] ? album.images[0].url : {}}/>
                            ) : (
                                <div className={css(style.defaultImage)}/>
                            )
                        }

                    </div>
                    <div className={css(style.itemName)}>
                        {album.name}
                    </div>
                    <div className={css(style.itemArtistName)}>
                        {artistAlbumData.artistName}
                    </div>
                    <div className={css(style.itemFooter)}>
                        <div className={css(style.itemTrack)}>
                            {album.release_date} <br/>
                            {album.total_tracks} tracks
                        </div>
                        <div className={css(style.redirect)}
                             onClick={() => window.open(album.external_urls.spotify, "_blank")}>
                            Preview on Spotify
                        </div>
                    </div>
                </div>
            )
        })
    }

    console.log(listArtistAlbum)

    return (
        <div className={css(style.container)}>
            <div className={css(style.title)}>
                <div className={css(style.titleName)}>
                    {artistAlbumData.artistName}
                </div>
                <div className={css(style.titleSub)}>
                    Albums
                </div>

            </div>
            {
                artistAlbumData.isLoading ? (
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
                        {listArtistAlbum}
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
    title: {
        width: "100%",
    },
    titleName: {
        paddingLeft: "10px",
        paddingRight: "5px",
        paddingTop: "15px",
        wordBreak: "break-all",
        fontWeight: "bold",
        fontSize: "24px"
    },
    titleSub: {
        paddingLeft: "10px",
        color: Color.darkPrimary,
        paddingRight: "5px",
        wordBreak: "break-all",
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
        marginRight: "15px",
        marginBottom: "10px",
        width: "200px",
        maxHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid " + Color.darkPrimary,
    },
    itemImage: {},
    itemArtistName: {
        paddingLeft: "10px",
        color: Color.darkPrimary,
        paddingRight: "5px",
        wordBreak: "break-all",
    },
    itemName: {
        paddingLeft: "10px",
        paddingRight: "5px",
        paddingTop: "15px",
        wordBreak: "break-all",
        fontWeight: "bold",
        fontSize: "18px"
    },
    defaultImage: {
        width: "200px",
        height: "180px",
        backgroundColor: Color.primary
    },
    itemFooter: {
        paddingTop: "20px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0px"
    },
    itemTrack: {
        paddingLeft: "10px",
        paddingRight: "5px",
        wordBreak: "break-all",
        color: Color.darkPrimary,
    },
    redirect: {
        display: "flex",
        padding: "10px",
        margin: "0",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.primary,
        border: "1px solid " + Color.darkPrimary,
        color: Color.darkPrimary,
        cursor: "pointer"
    }

});

export default BrowsingAlbumComponent;