import axiosRequest from '.';

export async function getUserApi({ page = 1, limit = 10 }) {
    let url = `users?page=${page}&size=${limit}`;
    return axiosRequest.get(url);
}