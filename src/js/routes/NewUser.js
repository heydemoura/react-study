import { assign } from 'lodash'
import React from 'react'

import UserStore from '../stores/userStore.js'

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: { name: '', email: '' }
		}
	}

	handleChange(e) {
		const newUserState = assign({}, this.state.user, {
			[e.target.name]: e.target.value
		})	

		this.setState({
			user: newUserState 
		})	
	}

	handleSubmit(e) {
		e.preventDefault()
		UserStore.addNewUser(this.state.user.name, this.state.user.email)
		console.log(UserStore.getAll())
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
