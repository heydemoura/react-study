import React from 'react'
import { Link } from 'react-router-dom'

export default class Index extends React.Component {
	render() {
		return (
			<div class="col-lg-4 col-lg-offset-4">
				<div class="jumbotron">
					<h2 class="page-header">Welcome to my React Website</h2>
					<p>This is my first ReactJS Website, hope you are kind enough to give me a star on github.</p>
				</div>
				<ul class="list-group">
					<li class="list-group-item">
						<Link to='/addUser'>New user</Link>
					</li>
				</ul>
			</div>
		)
	}
}
