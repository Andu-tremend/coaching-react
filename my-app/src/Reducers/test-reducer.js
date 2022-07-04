


const testRedoucer = (state = 0,  action) => {
    switch (action.type) {
        case 'ADDVAL':
            return state + 1;
        default:
            return state;
    }
}




export default testRedoucer;
