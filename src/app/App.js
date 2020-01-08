import React from 'react';
import Header from './layout/Header';
import '../App.css';
import img from './kucing.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            row: []
        }
    }

    render() {
        return(
            <div className="">
                <Header />
                <div>
                    <img className="img-full" src={img} alt="" />
                </div>
            </div>
        );
    }
}

export default App;