import axios, { 
    AxiosError, 
    AxiosResponse, 
    InternalAxiosRequestConfig 
} from 'axios';

const googleHttpClient = axios.create({
    baseURL: 'https://www.googleapis.com',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
    maxRedirects: 10
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('googleToken');
    config.headers.Authorization = `Bearer ${token}`;

    return config;
};

const errorInterceptor = (error: AxiosError) => {
    if (!error.response) {
        return Promise.reject(error);
    }

    return Promise.reject(error);
};

const responseInterceptor = (response: AxiosResponse) => {
    return response;
};

googleHttpClient.interceptors.request.use(authInterceptor);
googleHttpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default googleHttpClient;
