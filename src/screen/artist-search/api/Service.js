import {axiosInstance} from "../../../common/interceptor/AuthInterceptor"
import {Config} from "../../../common/environment/Config"
import {ApiName} from "./Config"

export const findArtist = (searchParams) => {

    const url = Config.SPOTIFY_BASE_URL + ApiName.search;
    console.log(searchParams)
    return axiosInstance.get(url, {params: searchParams})
}

