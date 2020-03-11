import {axiosInstance} from "../../../common/interceptor/AuthInterceptor"
import {Config} from "../../../common/environment/Config"
import {ApiName} from "./Config"

export const findArtistAlbum = (artistId) => {

    const url = Config.SPOTIFY_BASE_URL + ApiName.search.replace("{id}", artistId);
    return axiosInstance.get(url)
}

