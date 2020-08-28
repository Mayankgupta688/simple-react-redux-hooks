import React, { useEffect } from 'react';

import {connect} from "react-redux";
import * as actions from "../actions"
import Axios from 'axios';


function App(props) {

    useEffect(() => {
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(resp => {
            props.setEmployeeList(resp.data)
        })
    }, [])

    return (
        <>
            { props.employees && ( 
                props.employees.map(emp => (
                    <div key={emp.id}>
                        <img src={emp.avatar} alt={emp.name} />
                        <h1>User Name: {emp.name}</h1>
                        <h2>User Created On: {new Date(emp.createdAt).toDateString()}</h2>
                        <h3>Employee Id: {emp.id}</h3><hr/>
                    </div>
                )
            ))}
        </>
    )
}

function mapStateToPropsForEmployees(state) {
    return {
        employees: state.employees
    }
}

export var AppComponent = connect(mapStateToPropsForEmployees, actions)(App);