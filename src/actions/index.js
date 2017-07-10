import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POSTS = 'create_post';
export const DELETE_POST = 'delete_post';

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

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${MY_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${MY_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}