import {combineReducers} from 'redux';


const themeReducer = (state = true, action) => {
    if (action.type === 'THEME_TOGGLE') {
        return !state;
    }
    
    return state

        
}


export default combineReducers ({
    themeReducer: themeReducer
})