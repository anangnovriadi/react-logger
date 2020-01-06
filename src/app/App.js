import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
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
        console.log(img)
        return(
            <div className="">
                <Header />
                <div>
                    <img className="img-full" src={img} />
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;