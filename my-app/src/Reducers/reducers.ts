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


const pagination = (state:any = {currentPage: 1} , action: {type: string, payload: any}) => {

    const pageNumber = (param: string) => {
        const string = param;
        const pageNr = string.slice(string.length -1, string.length)
        return pageNr
    }

    switch (action.type) {
        case 'NEXT':
            
            return {...action.payload.info,
                pageDirection: action.payload.info.next,
                currentPage: pageNumber(action.payload.info.next)
        }
           
        case 'PREV':
            return {...action.payload.info,
                pageDirection: action.payload.info.prev,
                currentPage: pageNumber(action.payload.info.prev)
            }
    }

     return state
}


export default combineReducers ({
    themeReducer: themeReducer,
    logedInReducer,
    itemsDisplayTypeReducer,
    pagination
})