import { EventEmitter } from 'events'
import dispatcher from '../dispatcher.js'

class UserStore extends EventEmitter {
	constructor() {
		super()
		this.users = [
			{ name: 'Heyde Moura', email: 'moura.heyde@gmail.com' },
			{ name: 'Nuptae Casamentos', email: 'contato@nuptae.com.br' },
			{ name: 'Konpasa', email: 'moura.heyde@gmail.com' }
		]
	}


	getAll() {
		return this.users
	}

	getById(id) {
		return this.users[ id ? id : 0 ]
	}

	addNewUser(name, email) {
		this.users.push({ name, email })
		this.emit("change")
	}

	handleAction(action) {
		switch(action.type) {
			case 'FETCH_USERS':
				this.getAll()
				break
			case 'ADD_USER':
				const { payload } = action
				this.addNewUser(action.payload.name, action.payload.email)
				break
		}
	}
}

const userStore = new UserStore
dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore 
