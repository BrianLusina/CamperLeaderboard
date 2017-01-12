import React, { Component } from 'react';
import '../styles/header.css';


export default class Header extends Component{
    render(){
        return(
            <header className="clearfix">
				<span>The Lusina 
                    <span className="bp-icon bp-icon-about" 
                    data-content="Just some awesome developer..."></span></span>
				<h1>Camper Leaderboard</h1>
				<nav>
					<a href="http://tympanus.net/Blueprints/FullWidthTabs/" className="bp-icon bp-icon-prev" data-info="previous Blueprint"><span>Previous Blueprint</span></a>
					<a href="http://tympanus.net/codrops/?p=18699" className="bp-icon bp-icon-drop" data-info="back to the Codrops article"><span>back to the Codrops article</span></a>
					<a href="http://tympanus.net/codrops/category/blueprints/" className="bp-icon bp-icon-archive" data-info="Blueprints archive"><span>Go to the archive</span></a>
				</nav>
			</header>
        )
    }
}
