import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const MY_KEY = '?key=PAPERCLIP1432';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${MY_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${MY_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POSTS,
        payload: request
    }
}