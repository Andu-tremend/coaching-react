import React from 'react';
import store from '../Store/store';
import {displayList} from '../Actions/actions';
import {connect} from 'react-redux';



 class GridToggle extends React.Component {
 
    handleListView(event:any) {
        store.dispatch(displayList(event.target.id));
    }
    
    render() {
        const state = store.getState();
        const  displayType = state.itemsDisplayTypeReducer.display;
        return (
            <div className='toggle-button__container'>
                <span>Display: </span>
               <div id={'LIST'} onClick={(e) => {this.handleListView(e)}}  className='list-toggle'>
                <img className={`${displayType === "list" && "active"}`} src={`icon-list.svg` }/>
               </div>
               <div id={'GRID'} onClick={(e) => {this.handleListView(e)}}  className='grid-toggle'>
                <img className={`${displayType === "grid" && "active"}`} src='icon-grid.svg'/>
               </div>
            </div>
        )
    }

     
    componentDidMount() {
        return (
            <div>Loaded</div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    state: state.itemsDisplayTypeReducer
})


export default connect(mapStateToProps)(GridToggle)

