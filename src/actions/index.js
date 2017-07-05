import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

const MY_KEY = '?key=PAPERCLIP5678';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${MY_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}