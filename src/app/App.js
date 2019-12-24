import React from 'react';
import Header from './layout/Header';
import Api from './api/Api';
import '../App.css';



class App extends React.Component {
    intervalId;

    constructor(props) {
        super(props);

        this.state = {
            row: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillMount() {
        clearTimeout(this.intervalId);
    }

    fetchData = () => {
        Api.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
            const row = response.data;
            this.setState({ row });

            this.intervalId = setTimeout(this.fetchData.bind(this), 5000);
        });
    }

   

    render() {

        const st = {
            display: 'flex',
            flexDirection: 'column-reverse'
        }
        return(
            <div className="container mt-5">
                <Header />
                <div className="i-content">
                    <h4>Get API</h4>
                    <div style={st}>
                        { this.state.row.map((row, i) => <div style={st} key={i}>{ row.employee_name }</div>) }
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default App;