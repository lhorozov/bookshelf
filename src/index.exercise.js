import {Logo} from 'components/logo'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))

function App() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('onClick')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('onClick')}>Register</button>
      </div>
    </div>
  )
}
