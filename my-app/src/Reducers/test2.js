const testTwoRedoucer = (state = true, action) => {
    switch(action.type) {
        case 'TEST':
            return !state;
        default: 
            return state;
    }
}

export default testTwoRedoucer;