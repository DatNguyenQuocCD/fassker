import axiosRequest from '.';

export async function getPostsApi() {
  let url = `posts`;
  return axiosRequest.get(url);
}

export async function addPostsApi(data) {
  let url = `posts`;
  return axiosRequest.post(url, data);
}
