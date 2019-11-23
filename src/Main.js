import React from 'react';
import  './App.css'
import {Link} from "react-router-dom";
import foodinfo from './foodlist';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foodlist: foodinfo
        }
    }

    render() {
        console.log(this.state.foodlist);
        const listItems = this.state.foodlist.map((d) =>
            <div key={d.id} className="divMain">
                <h1 key='10'><Link to={`/${d.id}`}>{d.title}</Link></h1>
                <p key='11'>Date: {d.date}</p>
                <p key='12'>Summary: {d.summary}</p>
                <br/>
            </div>
        );
        return (
            <main>
                {listItems}
            </main>
        );
    }
}

export default Main;
