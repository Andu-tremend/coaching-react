import {combineReducers} from 'redux';
// import {fetchInitialData} from '../Actions/actions'

const themeReducer = (state = true, action: { type: string; }) => {
    if (action.type === 'THEME_TOGGLE') {
        return !state;
    }
    
    return state

}



// const DataReducer = (state = [], action) => {
//     if (action.type === 'FETCH_DATA') {
//         return [action.payload, ...state]
//     } else {
//         return state
//     }
// }

export default combineReducers ({
    themeReducer: themeReducer
})