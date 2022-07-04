


import increment from './test-reducer';
import testTwoRedoucer from './test2';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    testOne : increment,
    testTwo : testTwoRedoucer
})


export default allReducers