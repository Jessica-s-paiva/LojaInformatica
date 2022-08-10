import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes/Routes'
import Animation from './Components/Animation/Animation'

import './Style/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animation/>
    <Routes />
  </React.StrictMode>
)
