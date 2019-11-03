import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mb-5 mt-5">
                        <h2>Login</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}