import React, { Component } from 'react'
// import Body from './Body'
// import Header from './Header'
import data from './dataGlasses.json'

import './style.css'
export default class Home extends Component {
    state = {
        isShowInfo: true,
        glass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        showRenderInfo: false,
    }
    render() {
        return (
            <div className='main'>
                <div className='overlay'></div>
                <h2 className='heading'>TRY GLASSES APP ONLINE</h2>
                <div className="container">
                    <div className='row'>
                        <div className="col-4">
                            <div className="card__left">
                                <div className='glasses__model' id='avatar'>
                                    <img src='./glassesImage/v1.png' alt="..." />

                                </div>
                                <div className='glasses__info' id='info' >
                                    <h4>GUCCI G8850U</h4>
                                    <span>30$</span>
                                    <p className='mb-0'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card__right">
                                <div className='glasses__model' id='avatar' >
                                    <img src={this.state.glass.url} alt="..." style={{ display:this.state.showRenderInfo ? 'block' : 'none' }} />
                                </div>
                                <div className='glasses__info' id='info' style={{ display:this.state.showRenderInfo ? 'block' : 'none' }}>
                                    <h4>{this.state.glass.name}</h4>
                                    <span>{this.state.glass.price}$</span>
                                    <p className='mb-0'>{this.state.glass.desc}</p>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.isShowInfo && (
                                <div className='col-12 mt-5'>
                                    <div className="card__bottom">
                                        <div className="row">
                                            {
                                                data.map((glassesList) => {
                                                    return <div className='col-2 glasses__items' key={glassesList.id}>
                                                        <div className="card">
                                                            <img src={glassesList.url} alt={glassesList.name} onClick={() => {

                                                                this.setState({
                                                                    glass: glassesList,
                                                                    showRenderInfo:true
                                                                })
                                                            }} />
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}
