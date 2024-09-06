import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

const reactElement = {
    
  type: 'a',
  props : {
      href : "https://google.com",
      target : '_blank',
  },
  
  children : 'Click me to visit Google'
}


const aReactElement = React.createElement(
  'a',
  {href: 'https://youtube.com', target : '_blank'},

  'Click to Visit Youtube'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
