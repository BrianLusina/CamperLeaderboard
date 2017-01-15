import React, { Component, PropTypes } from 'react';

import Slideshow from './Slideshow';
import GridWrap from './GridWrap';
import jQuery from 'jquery';

export default class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[],
            reverse: true,
            column: "recent"
        }

        this._getData = this._getData.bind(this);
    }

    render(){
        return(
            <div id="grid-gallery" className="grid-gallery">
                <GridWrap users={this.state.users}/>
                <Slideshow users={this.state.users}/>
            </div>            
        )
    }

    // fetch data when the component mounts
    componentWillMount(){
        this._getData();
    }

    /**
     * Fetch user data from api
     * updates the state which will be passed on to GridWrap and Slideshow
     */
    _getData(){
        jQuery.ajax({
            method:"GET",
            url: this.props.apiroot+"top/"+this.state.column,
            dataType: 'json', 
            cache: false,
            success: function(data) {
                var users = data;
                // update users 
                this.setState({users});
                //console.log(users);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.apiroot, status, err.toString());
            }.bind(this)
        });
    }
}

// declare the props that this component must receive
Body.propTypes = {
    apiroot: PropTypes.string.isRequired,
}
