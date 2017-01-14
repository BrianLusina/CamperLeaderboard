import React, { Component, PropTypes } from 'react';

import Slideshow from './Slideshow';
import GridWrap from './GridWrap';
import jQuery from 'jquery';

export default class Body extends Component{
    constructor(){
        super();
        this.state = {
            users:[],
            reverse: true,
            column: "recent"
        }

        this._getData = this._getData.bind(this);
    }
    // fetch data when the component mounts
    componentDidMount(){
        this._getData();
    }

    render(){
        return(
            <div id="grid-gallery" className="grid-gallery">
                <GridWrap />
                <Slideshow />
            </div>            
        )
    }

    /**
     * Fetch user data from api
     * updates the state which will be passed on to GridWrap and Slideshow
     */
    _getData(){
        jQuery.ajax({
            method:"GET",
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/top/recent",
            dataType: 'json', 
            cache: false,
            success: function(data) {
                var users = data;
                this.setState({users: users});
                console.log(users);
            },

            error: function(xhr, status, err) {
                // console.error(this.props.apiroot, status, err.toString());
            }
        });
    }
}

// declare the props that this component must receive
Body.propTypes = {
    apiroot: PropTypes.string.isRequired,
}
