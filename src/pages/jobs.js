import React, { Component } from 'react';
import ReactTable from "react-table";

const data = [
    {
        "id": "1",
        "userId": "1",
        "title": "Plower",
        "description": "lorem ipsum dolor",
        "address": "Ontario, Canada",
        "latitude": "109.64",
        "longitude": "14.23",
        "ratePerSqm": "$15.32",
        "totalSqm": 100,
        "targetDate": "2018-10-28",
        "status": "PENDING",
        "isArchived": true,
        "createdAt": "2018-10-05",
        "updatedAt": "2018-10-06"
    }, {
        "id": "2",
        "userId": "1",
        "title": "Plower",
        "description": "lorem ipsum dolor",
        "address": "Kentucky, Canada",
        "latitude": "132.64",
        "longitude": "16.63",
        "ratePerSqm": "$10",
        "totalSqm": 30,
        "targetDate": "2018-10-28",
        "status": "ACCEPTED",
        "isArchived": true,
        "createdAt": "2018-10-05",
        "updatedAt": "2018-10-06"
    },
    {
        "id": "3",
        "userId": "1",
        "title": "Plower",
        "description": "lorem ipsum dolor",
        "address": "Vancouver, Canada",
        "latitude": "172.39",
        "longitude": "64.63",
        "ratePerSqm": "$10",
        "totalSqm": 30,
        "targetDate": "2018-10-28",
        "status": "REJECTED",
        "isArchived": true,
        "createdAt": "2018-10-05",
        "updatedAt": "2018-10-06"
    }
];


export default class Error extends Component {
    renderTable() {
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Description",
                            accessor: "description"
                        },
                        {
                            Header: "Address",
                            accessor: "address"
                        },
                        {
                            Header: "Latitude",
                            accessor: "latitude"
                        },
                        {
                            Header: "Longitude",
                            accessor: "longitude"
                        },
                        {
                            Header: "Status",
                            accessor: "status",
                            Cell: ({ original }) => {
                                let className;
                                switch(original.status) {
                                    case 'PENDING': className = 'warning'; break;
                                    case 'ACCEPTED': className = 'success'; break;
                                    case 'REJECTED': className = 'danger'; break;
                                    case 'ONGOING': className = 'primary'; break;
                                }
                                return (
                                    <span class={`label label-${className}`}>{original.status}</span>
                                );
                            },
                        },
                        {
                            Header: "Rate/SQM",
                            accessor: "ratePerSqm"
                        },
                        {
                            Header: "Total Sqm",
                            accessor: "totalSqm"
                        },
                        {
                            Header: "Target Date",
                            accessor: "targetDate"
                        },
                        {
                            Header: '',
                            Cell: row => (
                                <div>
                                    <button class="btn btn-primary btn-xs" onClick={() => handleEdit(row.original)}>Edit</button>
                                    <button class="btn btn-danger btn-xs" style={{marginLeft: 10}} onClick={() => handleDelete(row.original)}>Delete</button>
                                </div>
                            )
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        )
    }

    render() {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>
                        Jobs<small><a>+Add new job</a></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Job Feed</li>
                    </ol>
                </section>

                <section class="content">

                    {/* <div class="box">
                        <div class="box-header with-border">
                            <div class="box-tools pull-right">
                                <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                    title="Collapse">
                                    <i class="fa fa-minus"></i></button>
                                <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                    <i class="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div class="box-body">
                            Start creating your amazing application!
                      </div>
                        <div class="box-footer">
                            Footer
                      </div>
                    </div> */}
                    {this.renderTable()}
                </section>
            </div>
        )
    }
}