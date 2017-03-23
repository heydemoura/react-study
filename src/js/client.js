import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar.js'

// Pages
import Index from './routes/Index.js'
import About from './routes/About.js'
import NewUser from './routes/NewUser.js'

const App = () => {
	return (
		<Router>
			<div>
				<Navbar title='ReactAPP' />
				<div class="row">
					<div class="container">
						<Route exact={true} path="/" component={Index}></Route>
						<Route path="/about/:who" component={About} />
						<Route path="/addUser" component={NewUser} />
					</div>
				</div>
			</div>
		</Router>
	)
}

const reactApp = document.getElementById('reactApp')
ReactDOM.render(<App />, reactApp)


// REDUX
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'
import axios from 'axios'

const reducer = (state={}, action) => {
	switch(action.type) {
		case "NEW_ACTION_PENDING":
			return {...state, pending: true}	
			break;
		case "NEW_ACTION_REJECTED": 
			return {...state, pending: false, rejected: true}
			break;
	}
	
	return state
}

const middleware = applyMiddleware(promise(), createLogger())
const store = createStore(reducer, middleware)

store.dispatch({
	type: 'NEW_ACTION_PENDING',
	payload: setTimeout(() => null, 1500) 
})

