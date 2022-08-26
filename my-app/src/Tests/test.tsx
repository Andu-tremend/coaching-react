/**
 * @jest-environment jsdom
 */
import { render, fireEvent, screen, getAllByTestId,renderHook, act, cleanup } from "@testing-library/react";
import store from '../Store/store';
import { Provider } from 'react-redux';
import {useFetch, useConditionalRender} from '../Functions/index'
import Filters from '../Components/Filters'
import {filterReducer} from '../Reducers/reducers'



test("Render filters and update filters' reducer based on filter values", () => {
    render( <Provider store={store} >
                <Filters /> 
            </Provider> )
    
    const obj = {
        filterValue: "Rick", // The filter value (a status from dropdown, gender or a custom search query)
        filterType: 'name', // Values: 'status', 'gender', '<custom search value>'
        actionType: "filter-name" // values: 'filter-status', 'filter-gender', 'filter-name'
    }
    const testVal = obj.filterValue
    
    const option:any = screen.getByTestId("status")
    fireEvent.change(option, testVal)
    
    expect(filterReducer( {[obj.filterType]: testVal}, {
        type: obj.actionType,
        payload: testVal
    } )).toStrictEqual( {[obj.filterType]: testVal})
    
})


test(" Use useConditionalRender custom hook ", () => {
    const condVal = false;
    const truVal = "true val";
    const falsVal = "false val"
    const testHook = renderHook(() => useConditionalRender(condVal, truVal, falsVal))
    expect(testHook.result.current).toBe("false val")
    cleanup()
})


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

const getDataMock = async (PARAM: string) => {
    try {
        const response = await fetch(PARAM)
        const json = await response.json()
        return json

    }
    catch (error) {
        console.log(error)
    }
    
}
