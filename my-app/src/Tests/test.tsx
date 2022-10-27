/**
 * @jest-environment jsdom
 */
import { render, fireEvent, screen, getAllByTestId,renderHook, act, cleanup } from "@testing-library/react";
import store from '../Store/store';
import { Provider } from 'react-redux';
import { useConditionalRender} from '../Functions/index'
import Filters from '../Components/Home/Filters'
import {filterReducer} from '../Reducers/reducers'
import AbstractRespository from '../Repository/index'
import FetchClient from '../Services/FetchClient'

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

export class CusotmRepo extends AbstractRespository<string, any> {
    get status404 () {
        return "This is a 404"
    }
}

const testParams = [
    {
        key: "ceva",
        value: 22
    },
    {
        key: "altceva",
        value: 24
    }
]

test("Test Abstract repo methods", () => {
    const repo = new CusotmRepo();
    const spyBuildQueryParams = jest.spyOn(repo as any, 'buildQueryParams').mockImplementation((testParams: []) => {
        if (!testParams ) {
            return ""
        }
        const queryVal = testParams.map(({key, value}) => {
            return `${key}=${value}`
        })
        return `?${queryVal.join("&")}`
    })

    expect(repo.buildQueryParams(testParams)).toBe("?ceva=22&altceva=24") // Test with query params condition
    expect(repo.buildQueryParams()).toBe("") // Test if there are no query params

    const spyBuildUrl = jest.spyOn(repo, "buildUrl").mockImplementation( (path) => {
        if (!path) {
            return 'https://base-url.ro'
        }

        return `https://base-url.ro/${path}` 
    })

    expect(repo.buildUrl()).toBe("https://base-url.ro")
    expect(repo.buildUrl("character")).toBe("https://base-url.ro/character")

    
})




