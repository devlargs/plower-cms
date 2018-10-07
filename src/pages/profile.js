import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <h1>
                        User Profile
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Profile</li>
                    </ol>
                </section>

                <section class="content">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box box-primary">
                                <div class="box-body box-profile">
                                    <img class="profile-user-img img-responsive img-circle" src="/images/user.png" alt="User profile picture" />

                                    <h3 class="profile-username text-center">JB Padillo</h3>

                                    <p class="text-muted text-center">Plower</p>

                                    <ul class="list-group list-group-unbordered">
                                        <li class="list-group-item">
                                            <b>Jobs Finished</b> <a class="pull-right">324</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Rating</b> <a class="pull-right">3.5 out of 5</a>
                                        </li>
                                        <li class="list-group-item">
                                            <b>Rated by</b> <a class="pull-right">13,287</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}