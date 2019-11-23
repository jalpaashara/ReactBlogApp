import React from 'react';
import './App.css'
import { NavLink } from "react-router-dom";

const API_KEY =`${process.env.REACT_APP_NEWS_API_KEY}`;

class Navbar extends React.Component{
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state= {
            error: null,
            isLoaded: true,
            news: []
        };
    }

     /*async componentDidMount() {
         this._isMounted = true;
         try {
             setInterval(async () => {
                     await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=443f59f54e30441f87dc15b2733eef53')
                         .then(res => res.json())
                         .then(
                             (data) => {
                                 if (this._isMounted) {this.setState({isLoaded: true, news: data.articles})}
                                 // console.log("data", this.state);
                             }
                         )
                         .catch((error) => {
                             this.setState({
                                 isLoaded: false,
                                 error
                             });
                         })
                 },
                 5000
             );
         } catch(e) {
             console.log(e);
         }
     }

    async componentWillUnmount() {
        this._isMounted = false;
    }*/

    async componentDidMount() {
        await this.getNewsHeadlines()
    }

    getNewsHeadlines() {
        //set a loading state - good practice so you add a loading spinner or something
        this.setState({isLoaded: true}, () => {
            fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey='+API_KEY)
                .then(res => res.json())
                .then(
                    (data) => {
                        this.setState({isLoaded: true, news: data.articles})
                        // console.log("data", this.state);
                    }
                )
                .catch((error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                })
        })
        this.intervalID = setTimeout(this.getNewsHeadlines.bind(this),5000);

    }

    componentWillUnmount() {
    clearTimeout(this.intervalID);
    }

    render() {
        //console.log('this.state.data', this.state.news);
        const { error, isLoaded, news } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        return (
            <nav className="navStyle">
                <NavLink to="/" activeClassName="active"> Home </NavLink>
                <br/><br/>
                Courtesy: <a href={"https://news.google.com/"} target="_blank" rel="noopener noreferrer"> Google News </a>
                <ul>
                    {news && news.map(item => (
                        <li key={item.title}>
                            {item.title}
                        </li>
                    ))}

                </ul>
            </nav>
        )

    }
}

export default Navbar;
