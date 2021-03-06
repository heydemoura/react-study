import React from 'react'
import {Link} from 'react-router-dom'

import UserStore from '../stores/userStore.js'

export default class Navbar extends React.Component {
	render() {
		return(
			<nav class="navbar navbar-default navbar-static-top">
				<div class="continaer">
					<div class="navbar-header">
						<button class="navbar-toggle collapsed">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<Link class="navbar-brand" to="/">{this.props.title}</Link>
					</div>
					<div class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
						</ul>
					</div>
				</div>
			</nav>
		)	
	}
}
