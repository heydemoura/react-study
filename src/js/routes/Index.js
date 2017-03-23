import React from 'react'
import { Link } from 'react-router-dom'

import UserStore from '../stores/userStore.js'

export default class Index extends React.Component {
	componentWillMount() {
		UserStore.on('change', () => {
			this.setState({users: UserStore.getAll})
		})
	}

	render() {
		this.state = { users: UserStore.getAll() }
		const Users = this.state.users.map((u, i) => {
			return (
				<Link to={'/about/' + i} key={i} class="list-group-item">About {u.name.split(' ')[0]}</Link>
			)
		})

		return (
			<div class="col-lg-4 col-lg-offset-4">
				<div class="jumbotron">
					<h2 class="page-header">Welcome to my React Website</h2>
					<p>This is my first ReactJS Website, hope you are kind enough to give me a star on github.</p>
				</div>
				<ul class="list-group">
					<Link to='/addUser' class="list-group-item">
						<i class="fa fa-plus"></i>
						&nbsp; New user
					</Link>
				</ul>
				<ul class="list-group">
					{Users}
				</ul>
			</div>
		)
	}
}
