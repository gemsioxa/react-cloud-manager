// About
import { AxiosResponse } from "axios";
import googleHttpClient from "@/utils/googleHttpClient";

// Get user info
export const getUserInfo = (): Promise<AxiosResponse> => {
    return googleHttpClient.get("/drive/v2/about");
};