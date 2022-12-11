import {createAsyncThunk} from '@reduxjs/toolkit';
import {getPostsApi} from '../../api/posts';

export const getPostsData = createAsyncThunk('posts/getPostsData', async () => {
  const response = await getPostsApi();
  return response;
});
