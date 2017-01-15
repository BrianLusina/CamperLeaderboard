import React, { Component, PropTypes } from 'react';
import '../../styles/slideshow.css';
import moment from 'moment';

export default class Slideshow extends Component{
    constructor(){
        super();
        this.state={
            slideshowView:[]
        }
        this._displaySlideshowitems = this._displaySlideshowitems.bind(this);
    }

    //check if this component should update
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.users === nextProps.users && this.state.slideshowView === nextState.slideshowView){
            return false;
        }else{
            return true;
        }
    }

    // recieves the props and passess them down to have their views created
    componentWillReceiveProps(nextProps){
        this._displaySlideshowitems(nextProps);
    }

    render(){
        return(
            <section className="slideshow">
                <ul>
                {this.state.slideshowView}
                </ul>
                <nav>
                    <span className="icon nav-prev"></span>
                    <span className="icon nav-next"></span>
                    <span className="icon nav-close"></span>
                </nav>
                <div className="info-keys icon">Navigate with arrow keys</div>
            </section>
        )
    }

    //**Displays the slideshow items, receives props and creates their views */
    _displaySlideshowitems(receivedProps){
        var slideshowView = receivedProps.users.map((item, indx)=>{
            var update = moment(item.lastUpdate).format("YYYY-MM-DD HH:mm:ss");
            
            return(
                <li key={indx}>
                    <figure>
                        <figcaption>
                            <h3>{item.username}</h3>
                            <p>{update}</p>
                            <p>All time points: {item.alltime}</p>
                            <p>Past 30 Days: {item.recent}</p>
                        </figcaption>
                        <img src={item.img} alt={this.username}/>
                    </figure>
                </li>
            )
        });

        //update the state
        this.setState({slideshowView});
    }
}

Slideshow.propTypes = {
    users: PropTypes.array.isRequired
}