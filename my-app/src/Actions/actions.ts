import users from '../Login/users';

export const toggleAction = () => {
    return {
        type: 'THEME_TOGGLE',
        payload: 'theme style'
    }
}

export const loggedIn = (args:object ) => {
    return {
        type: 'SUCCESS_LOGIN',
        payload: args
    }
}


export const displayList = (type: string) => {
    return {
        type: type,
        payload: "Items display type"
    }
}
