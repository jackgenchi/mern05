import React from 'react'
//import { Link } from 'react-router-dom'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function EmployeeFilter (){

        //const Separator = () => <span> | </span>
        const navigate = useNavigate()
        const [ searchParams ] = useSearchParams()
        return(
            <div>
                Currently Employed: 
                {" "}
                <select 
                //get employee parameter from url string. If none, set to empty and select "all" from dropdown
                    value = {searchParams.get('employed') || ""}
                    onChange={(e)=> navigate(e.target.value ? 
                    `/employees?employed=${e.target.value}`:
                    `/employees`)}>
                    <option value="">All</option>
                    <option value="true">Employed</option>
                    <option value="false">Not Employed</option>
                </select>
                {/*change to class for the simple links
                <Link to={{ pathname: '/employees'}}>All Employees</Link>
                <Separator />
                <Link to={{ pathname: '/employees', search: "?employed=true"}}>Employed</Link>
                <Separator />
                <Link to={{ pathname: '/employees', search: "?employed=false"}}>Not Employees</Link> */}
            </div>
        )
    
}