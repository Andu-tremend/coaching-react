import users from '../Login/users';

export const toggleAction = () => {
    return {
        type: 'THEME_TOGGLE',
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
    }
}


export const actionCreator = (actionName :string, otherInfo: any) => {
    return {
        type: actionName,
        payload: otherInfo
    }
}
