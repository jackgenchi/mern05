import React from "react";
import Contents from "./Contents.jsx";

function NavBar(){
    return ( // series of hyper links
        <nav>
            <a href="/">Home</a>
            {' | '}
            <a href="/#/employees">All Employees</a>
            {' | '}
            <a href="/#/report">All Employees</a>
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