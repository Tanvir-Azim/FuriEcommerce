import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProdaxContax from './Components/ProdaxContax.jsx'
import CartContax from './Components/CartContax.jsx'
import FilterContax from './Components/FilterContax.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdaxContax>
        <FilterContax>
          <CartContax>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition: Bounce
              />
         </CartContax>
       </FilterContax>
      </ProdaxContax>
  </React.StrictMode>,
)
