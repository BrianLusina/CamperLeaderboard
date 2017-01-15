import React, { Component } from 'react';
import '../styles/header.css';


export default class Header extends Component{
    render(){
        return(
            <header className="clearfix">
				<span>The Lusina 
                    <span className="bp-icon bp-icon-about" 
                    data-content="Just some awesome developer..."></span></span>
				<h1>FCC Camper Leaderboard</h1>
				<nav>
					<a href="http://twitter.com/brianlusina/" className="bp-icon bp-icon-twitter" data-info="Twitter"><span>Twitter</span></a>
					<a href="http://github.com/BrianLusina" className="bp-icon bp-icon-github" data-info="Github"><span>Github</span></a>
					<a href="https://plus.google.com/102302755150765254402" className="bp-icon bp-icon-google" data-info="Google+"><span>Google+</span></a>
				</nav>
			</header>
        )
    }
}
