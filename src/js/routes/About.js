import React from 'react'

import UserStore from '../stores/userStore.js'

export default class About extends React.Component {
	render() {
		const { params } = this.props.match
		this.state = {
			user: UserStore.getById(params.who)
		}

		return (
			<div class="col-lg-4 col-lg-offset-4">
				<div class="jumbotron text-center">
					<h3>My First ReactJS Website</h3>
					<p>{this.state.user.name} ({this.state.user.email}) </p>
				</div>
			</div>
		)
	}
}
