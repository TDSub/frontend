import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import CommonLayout from './layouts/CommonLayout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommonLayout>
      <App />
    </CommonLayout>
  </React.StrictMode>
)
