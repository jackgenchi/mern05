import React from "react";
import { NavLink } from 'react-router-dom'
// importing to rely on active state
import Contents from "./Contents.jsx";

function NavBar(){
    const Separator = () => <span> | </span>
    return ( // series of hyper links. nav link to highlight any path that partially matches current path
        // helpful for nav link has further variations
        <nav>
            <NavLink end to="/">Home</NavLink>
            <Separator/>
            <NavLink to="/employees">All Employees</NavLink>
            <Separator/>
            <NavLink to="/report">Reports</NavLink>
        </nav>
    )
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}