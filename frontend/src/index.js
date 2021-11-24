import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'

const Main = (props) => {
  return (
    <React.Fragment>
      <Router>
        <App />
      </Router>
    </React.Fragment>
  )
}

render(<Main />, document.getElementById('root'))