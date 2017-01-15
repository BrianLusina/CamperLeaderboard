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

    // create the user views before the component renders
    componentWillMount(){
        this._createElement();
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
    _createElement(){
        var userViews = this.props.users.map((item, indx) =>{
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