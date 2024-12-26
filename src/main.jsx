import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { storedata } from './reduxdata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <Provider store={storedata}>
           <App />
        </Provider> */}
        <Provider store={storedata}>
          <App/>
        </Provider>
  </StrictMode>,
)
