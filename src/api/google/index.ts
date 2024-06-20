// About
import { AxiosResponse } from "axios";
import googleHttpClient from "@/utils/googleHttpClient";
import { About, File, GoogleAPIType } from "./types";

// Get user info
export const getUserInfo = (token: string): Promise<AxiosResponse<About>> => {
    console.log(token);
    return googleHttpClient.get<About>("/drive/v2/about",
    {
        params: {},
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getResourceList = (token: string): Promise<AxiosResponse<File>> => {
    console.log(token);
    return googleHttpClient.get<File>("/drive/v2/files",
    {
        params: {},
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default {
    getUserInfo,
    getResourceList
} as GoogleAPIType;