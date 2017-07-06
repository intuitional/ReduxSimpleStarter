import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
// importing from index.js, so no need to specify

export default function(state = {}, action) {
    switch (action.type) {
    case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}