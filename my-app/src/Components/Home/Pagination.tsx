import { actionCreator} from '../../Actions/Actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Pagination (props: any) {

    const storeState = useSelector((state:any) => state);
    const data = props.page;
    const dispatch = useDispatch();
    const handlePagination = (e:any) => {
        dispatch(actionCreator(e.target.name, data))
    }
  
    return (
        <div className="pagination-wrapper" style={{display: "flex", gap: "32px"}}>
            <button name="PREV" onClick={(e) => {handlePagination(e)}}>{"<"}</button>
            <div>Page: {storeState.pagination.currentPage}</div>
            <button name="NEXT" onClick={(e) => {handlePagination(e)}}>{">"}</button>
        </div>
    )
}