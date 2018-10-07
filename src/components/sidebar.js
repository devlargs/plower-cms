import React, { Component } from "react";

export default class Sidebar extends Component {
    render() {
        return (
            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="/images/user.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Sherwin Mercurio</p>
                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..." />
                            <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>

                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">MAIN NAVIGATION</li>
                        <li><a href="/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                        <li><a href="/jobs"><i class="fa fa-book"></i> <span>Job Feed</span></a></li>
                        <li><a href="/users"><i class="fa fa-user"></i> <span>Users</span></a></li>
                        <li><a href="/settings"><i class="fa fa-gear"></i> <span>Settings</span></a></li>
                    </ul>
                </section>
            </aside>
        )
    }
}