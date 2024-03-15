import axios, { 
    AxiosError, 
    AxiosResponse, 
    InternalAxiosRequestConfig 
} from 'axios';

const yandexHttpClient = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
    maxRedirects: 10
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('yandexToken');
    config.headers.Authorization = `OAuth ${token}`;

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

yandexHttpClient.interceptors.request.use(authInterceptor);
yandexHttpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default yandexHttpClient;
