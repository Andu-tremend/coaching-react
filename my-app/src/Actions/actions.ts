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

interface ActionInterface {
    otherInfo?: string
}

export const actionCreator = (actionName :string, otherInfo: string) => {
    return {
        type: actionName,
        payload: otherInfo
    }
}
