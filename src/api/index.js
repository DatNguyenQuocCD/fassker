import axios from 'axios';

const ROOT_API = 'https://61b5b8db0e84b70017331bac.mockapi.io/';

const axiosRequest = axios.create({
    baseURL: ROOT_API,
    timeout: 15000,
});

axiosRequest.interceptors.request.use(
    config => {
        // const accessToken = store.getState().auth?.accessToken;
        // if (accessToken) {
        //   config.headers.Authorization = `bearer ${accessToken}`;
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

axiosRequest.interceptors.response.use(
    response => {
        return response;
    },
    async (error = {}) => {
        // Alert.alert('')
        console.log('💩: error', error);
    },
);

export default axiosRequest;