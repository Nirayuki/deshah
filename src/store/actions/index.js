import { SET_USER } from './actions_types';

export function setUser(user) {
    return{
        type: SET_USER,
        user: user
    };
}