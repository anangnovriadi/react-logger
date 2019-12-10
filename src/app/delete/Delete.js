import React from 'react';
import Header from '../layout/Header';
import Api from '../api/Api';

class Delete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ id: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        Api.delete('https://jsonplaceholder.typicode.com/users/'+this.state.id)
        .then(response => {
            console.log(response);
            console.log(response.data);
        });
    }
    render() {
        return(
            <div className="container mt-5">
                <Header />
                <div className="i-content">
                    <div className="mb-4">
                        <h4>Delete API</h4>
                    </div>
                    <div className="col-md-6 p-0">
                        <form onSubmit={this.handleSubmit}>
                            <label>ID</label>
                            <div className="input-group mb-3">
                                <input type="text" name="id" className="form-control" onChange={this.handleChange} placeholder="Username" />
                            </div>
                            <div className="col-md-6 p-0">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Delete;