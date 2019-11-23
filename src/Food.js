import React from 'react';
import Main from "./Main";
import Header from "./Header";
import Nav from "./Navbar";
import Footer from "./Footer";
import "./App.css"

class Food extends Main {

    render() {
        let finalItems = null;
        const itemsList = this.state.foodlist;
        console.log('items',itemsList);
        let key = this.props.match.params.foodid;

        itemsList.map((item) =>{
            if (key == item.id){
                finalItems = (
                    <div key={item.id} className="divMain">
                        <h1 key='10'>{item.title}</h1>
                        <p key='11'>Date: {item.date}</p>
                        <p key='12' className="desc">{item.description}</p>
                        <img src={item.img} alt='' />
                        <br/><br/>
                    </div>
                );
            }
        });

        console.log(finalItems);

        return (
            <main>
                <div className="main_container">
                    <Header />
                    <div className="maincontent">
                        {finalItems}
                        <Nav />
                    </div>
                    <Footer />
                </div>
            </main>
        );
    }
}

/*const Food = (props) =>{
    console.log('id',props.match.params.foodid);
    return(
        <main>
            <h1>{props.match.params.foodid}</h1>
        </main>
    )
}*/
export default Food;
