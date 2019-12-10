import React from 'react';
import Header from '../layout/Header';
import Api from '../api/Api';

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const all = {
            username: this.state.username,
            name: this.state.name,
            phone: this.state.phone
        };

        Api.post('https://jsonplaceholder.typicode.com/users', {all})
        .then(response => {
            console.log(response);
            console.log(response.data);
        })
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div className="container mt-5">
                <Header />
                <div className="i-content">
                    <div className="mb-4">
                        <h4>Post API</h4>
                    </div>
                    <div className="col-md-6 p-0">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" name="username" className="form-control" onChange={this.handleChange} placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" name="name" className="form-control" onChange={this.handleChange} placeholder="Name" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" name="phone" className="form-control" onChange={this.handleChange} placeholder="Phone" />
                            </div>
                            <div className="col-md-6 p-0">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;