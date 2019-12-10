import React from 'react';
import Header from './layout/Header';
import Api from './api/Api';
import '../App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            row: []
        }
    }

    componentDidMount() {
        Api.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const row = response.data;
            this.setState({ row });
        });
    }
    render() {
        return(
            <div className="container mt-5">
                <Header />
                <div className="i-content">
                    <h4>Get API</h4>
                    <ul>
                        {/* { this.state.row.map(row => <li>{ row.name }</li>) } */}
                        { this.state.row.map((row, i) => <li key={i}>{ row.name }</li>) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;