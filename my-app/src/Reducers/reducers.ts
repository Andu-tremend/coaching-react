import {combineReducers} from 'redux';

const themeReducer = (state = true, action: { type: string; }) => {
    if (action.type === 'THEME_TOGGLE') {
        return !state;
    }
    
    return state

}

const autentificationInitialState = {
    username: "",
    password: ""
}

const logedInReducer = (state = autentificationInitialState, action: {type: any; payload: any}) => {

    switch(action.type) {
        case 'SUCCESS_LOGIN':
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
             }
    }

    return state
}

const itemsDisplayTypeReducer = (state = {display: "grid"}, action: {type: string}) => {
    if (action.type === 'LIST') {
        return {...state, 
            display: "list"}
    } else if (action.type === 'GRID'){
        return {...state, 
            display: "grid"}
    }

    return state
}


export default combineReducers ({
    themeReducer: themeReducer,
    logedInReducer,
    itemsDisplayTypeReducer
})