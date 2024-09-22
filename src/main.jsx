import React from 'react'
import { BrowserRouter as Router } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PrivyProvider} from '@privy-io/react-auth';


const root = createRoot(document.getElementById('root'))

root.render(
    <PrivyProvider
      appId="cm0p24zs000spq0manegekhf8"
      config={{
        // Customize Privy's appearance in your app
       
        appearance: {
          theme: 'dark',
         
        },
        // Create embedded wallets for users who don't have a wallet
       
      }}
    >
       <Router>
         <App/>
       </Router>
     
    </PrivyProvider>
)