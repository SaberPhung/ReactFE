import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
const Attendance=(props)=>{
    const [attendance, setAttendance]=useState([]);
    useEffect(()=>{
        fetch("/attendances")
        .then(function(response){
            response.json().then(function(data){
                setAttendance(data);
            })
        })
    },[]);

    const columns = [
    {
        Header: 'Id',
        accessor: 'id' // String-based value accessors!
    },
    {
        Header: 'Key',
        accessor: 'key'
    }
    ];
    return(
        <div>
            <h4>{props.title}</h4>
            <ReactTable data={attendance} columns={columns}/>
        </div>
    );
};

export default Attendance;
