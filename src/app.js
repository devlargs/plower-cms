import React, { Component } from 'react';

//components
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from './components/sidebar';

//pages
import Home from './pages/home';
import Jobs from './pages/jobs';
import NotFound from './pages/error';

class App extends Component {
    renderPage() {
        switch (page) {
            case 'index': return <Home />;
            case 'jobs': return <Jobs />;
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