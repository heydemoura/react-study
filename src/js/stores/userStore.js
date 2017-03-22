import { EventEmitter } from 'events'

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
}

export default new UserStore
