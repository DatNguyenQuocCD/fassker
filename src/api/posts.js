import axiosRequest from '.';

export async function getPostsApi({ page = 1, limit = 10 }) {
    let url = `posts?page=${page}&size=${limit}`;
    return axiosRequest.get(url);
}