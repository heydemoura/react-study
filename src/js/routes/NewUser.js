import { assign } from 'lodash'
import React from 'react'

import UserStore from '../stores/userStore.js'
import * as UserActions from '../actions/UserActions.js'

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { name: '', email: '' }
		}
	}

	handleChange(e) {
		const user = assign({}, this.state.user, {
			[e.target.name]: e.target.value
		})	

		this.setState({user})	
	}

	handleSubmit(e) {
		e.preventDefault()
		UserActions.addUser(this.state.user.name, this.state.user.email)
	}

	render() {
		return (
			<div class="col-lg-4 col-lg-offset-4">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div class="form-group">
						<input class="form-control" type="text" name="name" placeholder="Name" value={this.state.user.name} onChange={this.handleChange.bind(this)}/>
					</div>
					<div class="form-group">
						<input class="form-control" type="email" name="email" placeholder="Email" value={this.state.user.email} onChange={this.handleChange.bind(this)}/>
					</div>
					<button class="btn btn-primary" type="submit">Add</button>
				</form>
			</div>
		)
	}
}
