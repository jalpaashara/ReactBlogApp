import React from 'react';
import './App.css';
import Nav from "./Navbar";
import Main from "./Main";
import Header from "./Header.js"
import Footer from "./Footer.js";

class Home extends React.Component{
    render(){
        return(
            <div className="main_container">
                <Header />
                <div className="maincontent">
                    <Main />
                    <Nav />
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;
