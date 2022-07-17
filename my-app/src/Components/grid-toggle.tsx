import React from 'react';
import store from '../Store/store';
import {displayList} from '../Actions/actions';
import {connect} from 'react-redux';



 class GridToggle extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = { 
        };

    };

     handleListView(event:any) {
        store.dispatch(displayList(event.target.id));
        const state = store.getState();
        const displayType = state.itemsDisplayTypeReducer.display;
    }

   

    render() {

        // const stateTest = store.getState();
        return (
            <div className='toggle-button__container'>
                <span>Display: </span>
               <div id={'LIST'} onClick={(e) => {this.handleListView(e)}}  className='list-toggle'>
                <img width="24px" src='icon-list.svg'/>
               </div>
               <div id={'GRID'} onClick={(e) => {this.handleListView(e)}}  className='grid-toggle'>
                <img width="24px" src='icon-grid.svg'/>
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

