import dispatcher from '../dispatcher.js'

export function loadUsers() {
	dispatcher.dispatch({
		type: 'FETCH_USERS'
	})
}

export function addUser(name, email) {
	dispatcher.dispatch({
		type: 'ADD_USER',
		payload: {
			name, email
		}
	})
}
