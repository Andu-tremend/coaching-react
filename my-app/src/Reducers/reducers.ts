import { PayloadAction } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

const themeReducer = (state = true, action: { type: string; }) => {
    if (action.type === 'THEME_TOGGLE') {
        return !state;
    }
    return state

}

// Login reducer

const autentificationInitialState = {
    username: "",
    password: ""
}

interface loginInterface {
    type: string,
    payload: {  
            username: string,
            password: string
            }
  
}

const logedInReducer = (state = autentificationInitialState, action: {type: loginInterface["type"], payload: loginInterface["payload"]}) => {

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

// Display GRID / LIST reducer

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

    //Pagination reducer

    const pagination = (state:any = {currentPage: 1} , action: {type: string, payload: any}) => {

        const pageNumber = (string: string) => {

            // I suck at naming stuff
            const pageString = string.split("?").filter( items => items.includes("page") )
            const pageStrArr = pageString[0].split("&");
            const pageStrFinall = pageStrArr[0].toString();

            let pageNr = pageStrFinall.slice(pageStrFinall.length -2)
            if (pageNr.includes("=")) {
                pageNr = pageStrFinall.slice(pageStrFinall.length -1)
            }

            return pageNr
        }


    switch (action.type) {
        case 'NEXT':
            
            return {...action.payload.info,
                pageDirection: action.payload.info.next,
                currentPage: pageNumber(action.payload.info.next),
        }
           
        case 'PREV':
            return {...action.payload.info,
                pageDirection: action.payload.info.prev,
                currentPage: pageNumber(action.payload.info.prev)
            }
    }

     return state
}

// FILTERS REDUCER

const blankFilters = {
    name: "",
    status: "",
    gender: ""
}

export const filterReducer = (state: object = blankFilters, action: {type: string, payload: string}) => {
    switch(action.type) {
        case 'filter-status':
            return {...state,
                status: action.payload}
        case 'filter-gender':
            return {...state,
                gender: action.payload}
        case 'filter-name':
            return {...state,
                name: action.payload}
    }


    return state
}



// const canvaToolsInitialState = {
//     color: "#aee6e3",
//     brush: "5",
//     reset: false
// }


// export const canvaTools = (state: {color: string, brush: string, reset: boolean } = canvaToolsInitialState, action: {type: string, payload: any}) => {
//     switch(action.type) {
//         case 'setColor' :
//             return {...state,
//                 color: action.payload,
//                 guma: false}
//         case 'setBrush' :
//             return {...state,
//                 brush: action.payload
//             }
//         case 'setReset' :
//             return {...state,
//                 reset: action.payload,
//                 guma: false}
//         case 'setGuma' :
//             return {...state,
//                 guma: action.payload,
//                 color: "#ffffff",}        
//     }

//     return state
// }


export default combineReducers ({
    themeReducer: themeReducer,
    logedInReducer,
    itemsDisplayTypeReducer,
    pagination,
    filterReducer,
    
})