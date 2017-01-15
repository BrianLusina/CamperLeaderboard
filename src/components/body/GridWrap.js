import React, { Component, PropTypes } from 'react';
import '../../styles/gridwrap.css'

//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

export default class GridWrap extends Component{
    constructor(props){
        super(props);
        
        this.state={
            userViews : []
        }

        this._createElement = this._createElement.bind(this);
    }

    //check if the component should update
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.users === nextProps.users && this.state.userViews === nextState.userViews){
            return false;
        }else{
            return true;
        }
    }

    // create the user views before the component renders
    // when it receives the props
    componentWillReceiveProps(nextProps){
        this._createElement(nextProps);
    }

    render(){
        return(
            <section className="grid-wrap">
                <ul className="grid">
                    <li className="grid-sizer"></li>
                    {this.state.userViews}
                </ul>
            </section>
        )
    }


    // creates a view element for each of the user data received
    _createElement(receivedProps){
        var userViews = receivedProps.users.map((item, indx) =>{
            return(
                <li key={indx}>
                    <figure>
                        <img src={item.img} alt={this.username}/>
                        <figcaption>
                            <h3>{item.username}</h3>
                            <p>{item.lastUpdate}</p>
                            <p>{item.alltime}</p>
                            <p>{item.recent}</p>
                        </figcaption>
                    </figure>
                </li>
            )
        });

        // update the state
        this.setState({userViews});
    }
    
}


GridWrap.propTypes = {
    users :PropTypes.array.isRequired
}