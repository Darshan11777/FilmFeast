import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { Provider } from 'react-redux'
import { store } from './Redux/Store.jsx'
import Hero from './pages/home/hero/Hero.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
    
  </Provider>
  
)
