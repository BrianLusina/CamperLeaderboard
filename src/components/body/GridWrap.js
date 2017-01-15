import React, { Component } from 'react';
import '../../styles/gridwrap.css'

//https://fcctop100.herokuapp.com/api/fccusers/top/recent
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime

export default class GridWrap extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section className="grid-wrap">
                <ul className="grid">
                    <li className="grid-sizer"></li>
                    <li>
                        <figure>
                            <img src="img/thumb/1.png" alt="img01"/>
                            <figcaption><h3>Bottle wayfarers locavore</h3><p>Once there was a little asparagus, he was green and lonely.</p></figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        )
    }

    
}