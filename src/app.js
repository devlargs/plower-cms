import React, { Component } from 'react';

//components
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from './components/sidebar';

//pages
import Home from './pages/home';
import Jobs from './pages/jobs';
import NotFound from './pages/error';
import Users from './pages/users';
import Profile from './pages/profile';

class App extends Component {
    renderPage() {
        switch (page) {
            case 'index': return <Home />;
            case 'jobs': return <Jobs />;
            case 'users': return <Users />;
            case 'profile': return <Profile />;
            default: return <NotFound />
        }        
    }

    render() {
        return (
            <div>
                <div class="wrapper">
                    <Header /> 
                    <Sidebar />
                    {this.renderPage()}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;