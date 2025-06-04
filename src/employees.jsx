import React from 'react'
import { createRoot } from 'react-dom/client'
//import EmployeeList from './EmployeeList.jsx'
import Page from './page.jsx'
import { HashRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('content'))
root.render(
    <Router>
        <React.StrictMode>
            <Page />
        </React.StrictMode>
    </Router>
)