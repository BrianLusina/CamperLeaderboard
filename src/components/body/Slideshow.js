import React, { Component, PropTypes } from 'react';
import '../../styles/slideshow.css';


export default class Slideshow extends Component{
    constructor(){
        super();
        this._displaySlideshowitems = this._displaySlideshowitems.bind(this);
    }

    render(){

        return(
            <section className="slideshow">
                <ul>
                    <li>
                        <figure>
                            <figcaption>
                                <h3>Letterpress asymmetrical</h3>
                                <p>Kale chips lomo biodiesel stumptown Godard Tumblr, mustache sriracha tattooed cray aute slow-carb placeat delectus. Letterpress asymmetrical fanny pack art party est pour-over skateboard anim quis, ullamco craft beer.</p>
                            </figcaption>
                            <img src="img/large/1.png" alt="img01"/>
                        </figure>
                    </li>
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

    _displaySlideshowitems(){
        
    }
}

Slideshow.propTypes = {
    users: PropTypes.array.isRequired
}