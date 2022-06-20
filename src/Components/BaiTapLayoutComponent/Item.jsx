import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <div className="col-md-3">
                        <div className="card" style={{ width: 240 }}>
                            <img className="card-img-top" src="./img/500x325.png" alt="Cardimage" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Cart Title</h4>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, amet.</p>
                                <a href="/#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: 240 }}>
                            <img className="card-img-top" src="./img/500x325.png" alt="Cardimage" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Cart Title</h4>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, amet.</p>
                                <a href="/#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: 240 }}>
                            <img className="card-img-top" src="./img/500x325.png" alt="Cardimage" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Cart Title</h4>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, amet.</p>
                                <a href="/#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: 240 }}>
                            <img className="card-img-top" src="./img/500x325.png" alt="Cardimage" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">Cart Title</h4>
                                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, amet.</p>
                                <a href="/#" className="btn btn-primary">Find Out More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
