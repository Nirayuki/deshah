import {
    SET_USER
} from '../actions/actions_types'


const initialState = {
   user: {}
};


export function userReducer(state = initialState, action) {
    console.log("Entrou no reducer", action)
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {
                user: action.user
            });    
    }
    return state;
}
