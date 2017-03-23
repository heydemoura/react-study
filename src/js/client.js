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
