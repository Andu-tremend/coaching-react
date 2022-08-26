import {useSelector, useDispatch} from 'react-redux';
import  {actionCreator} from '../Actions/Actions';
import { ChangeEvent, useState } from 'react';

export default function Filters() {

    const dispatch = useDispatch();

    const [searcVal, setSearchVal] = useState({
        value: ""
    });

    
    const handleFilter = (e:any) => {
        dispatch(actionCreator(`filter-${e.target.id}`, e.target.value))  
    }


    const handleSearch = (e: any) => {
        e.preventDefault();
        dispatch(actionCreator("filter-name", e.target[0].value))
    }

    const handleSearchChange = (e: ChangeEvent) => {
        setSearchVal((oldVal) => {
            return {
                ...oldVal,
                value: (e.target as HTMLInputElement).value
            }
          })
    }


    return (
        <div className="filters__form-wrapper">
            <form>
                <label>Filter by status: &nbsp;</label>
                <select  id='status' data-testid="status" onChange={(e) => {handleFilter(e)}}> 
                    <option data-testid="alive" value={""}>All</option>
                    <option data-testid="dead" value={"dead"}>Dead</option>
                    <option data-testid="alive" value={"alive"}>Alive</option>
                </select>
            </form>
            <form>
                <label>Filter by gender: &nbsp;</label>
                <select  id="gender"  data-testid="gender"  onChange={(e) => {handleFilter(e)}}> 
                    <option value={""}>All</option>
                    <option value={"female"}>Female</option>
                    <option value={"male"}>Male</option>
                    <option value={"genderless"}>Genderless</option>
                    <option value={"unknown"}>Unknown</option>

                </select>
            </form>
            <form onSubmit={(e) => {handleSearch(e)}}>
                <input value={searcVal.value} onChange={(e) => {handleSearchChange(e)}} type={"text"} placeholder="Search" />
                <button><img src='search-solid.svg' alt='search-btn'/></button>
            </form>
        </div>
    )
}