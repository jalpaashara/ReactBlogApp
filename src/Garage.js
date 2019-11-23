import React from 'react';

const Car =  ({name}) => <h2>Hi, I am a {name} Car!</h2>

class CarObj extends React.Component {
    render() {
        return (
            <div>
                <Car name="Ford"></Car>
                <Car name="Chevy"></Car>
            </div>)

    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <CarObj/>
            </div>
        );
    }
}

export default Garage;
