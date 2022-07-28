import React from "react";
import {toggleAction, actionCreatorTest} from '../Actions/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Pagination (props: any) {

    // Just testing 
    const storeState = useSelector((state:any) => state);

    const data = props.page;
    const dispatch = useDispatch();
    const handlePagination = (param:any) => {
        dispatch(actionCreatorTest(param.target.name, data))
    }

  
    return (
        <div className="pagination-wrapper" style={{display: "flex", gap: "32px"}}>
            <button name="PREV" onClick={(param) => {handlePagination(param)}}>Prev</button>
            <div>Page number: {storeState.pagination.currentPage}</div>
            <button name="NEXT" onClick={(param) => {handlePagination(param)}}>Next</button>
        </div>
    )
}