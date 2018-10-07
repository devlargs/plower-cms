import React, { Component } from 'react';
import ReactTable from 'react-table';

const data = [
    {
        roleId: "Administrator",
        email: "sherwin.mercurio",
        username: "kaolak",
        socialMediaType: "FB",
        firstName: "Sherwin",
        lastName: "Mercurio",
        active: true,
        photoUrl: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/18402906_10155512898032638_8544358572656959556_n.jpg?_nc_cat=108&_nc_eui2=AeHOestF0n4dP1uXoxXqaB74aPMM-5EeQzZUdpmXZSPhq7_xR8ycOS1NGgRSYiviqQMg7H62W85qkZQ0zsJ9bndR1YdM1IaUMdsQ_o--rOnvX9PLYDmhKmoG9DHlVTgSMjI&oh=0884ae29a9e3a5f72eb7fae671b73c6a&oe=5C5F61BE",
    },
    {
        roleId: "Administrator",
        email: "bretpura@gmail.com",
        username: "rosx.less",
        socialMediaType: "FB",
        firstName: "Bret",
        lastName: "Pura",
        active: true,
        photoUrl: "https://media.licdn.com/dms/image/C4D03AQGwYyVWX0z1GA/profile-displayphoto-shrink_200_200/0?e=1539216000&v=beta&t=IU6HNQ2nLK9DiqpvCpi9yTRzN7IAlzKxa6MvnxV-8lU",
    },
    {
        roleId: "Normal User",
        email: "devlargs@gmail.com",
        username: "devlargs",
        socialMediaType: "Google",
        firstName: "Ralph",
        lastName: "Largo",
        active: true,
        photoUrl: "https://m.media-amazon.com/images/M/MV5BN2JmODBiMDAtNjYyZS00YjE4LWIzYmMtMDYwY2JhZTYyNzljL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    }
]


export default class Error extends Component {
    renderTable() {
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: '',
                            width: 45,
                            Cell: ({ original }) => {
                                return (
                                    <img class="img img-circle" style={{ width: 30, height: 30 }} src={original.photoUrl}/>
                                );
                            },
                        },
                        {
                            Header: "Role",
                            accessor: "roleId"
                        },
                        {
                            Header: "Email Address",
                            accessor: "email"
                        },
                        {
                            Header: "Username",
                            accessor: "username"
                        },
                        {
                            Header: "Social Media Type",
                            accessor: "socialMediaType"
                        },
                        {
                            Header: "First Name",
                            accessor: "firstName"
                        },
                        {
                            Header: "Last Name",
                            accessor: "lastName"
                        },
                        {
                            Header: '',
                            width: 150,
                            Cell: row => (
                                <div>
                                    <button class="btn btn-success btn-xs" onClick={() => handleEdit(row.original)}>Edit</button>
                                    <button class="btn btn-warning btn-xs" style={{ marginLeft: 10 }} onClick={() => handleEdit(row.original)}>Block</button>
                                    <button class="btn btn-danger btn-xs" style={{ marginLeft: 10 }} onClick={() => handleDelete(row.original)}>Delete</button>
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
                        Users<small><a>+Add new user</a></small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Users</li>
                    </ol>
                </section>

                <section class="content">
                    {this.renderTable()}
                </section>
            </div>
        )
    }
}