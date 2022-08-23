import React, { Component } from 'react'
import data from './dataGlasses.json'
export default class RenderingWithMap extends Component {
    state = {
        isShowGlasses: true,
        glasses:
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }

    }

    // renderGlassesList = () => {
    //     let html = []
    //     for (let index = 0; index < this.glassesList.length; index++) {
    //         let glasses = this.glassesList[index];
    //         console.log(glasses)

    //         let list = <div className='col-2 glasses__items' key={index} >

    //             <img src={glasses.url} alt={glasses.name} width={150} onClick={this.showGlasses}/>

    //         </div>
    //         html.push(list)
    //     }
    //     return html
    // }

    render() {
        return (
            <div className="col-12 mt-5 ">
                {
                    data.map((glassesList) => {

                        <div className="card__bottom" key={glassesList.id}>
                            <div className="row" id='glassesList'>
                                <div className='col-2 glasses__items'>
                                    <img src={glassesList.url} alt={glassesList.name} />
                                </div>
                            </div>
                        </div>
                    })
                }
            </div >

            // <div className="col-12 mt-5">
            //     <div className="card__bottom">
            //         <div className="row" id='glassesList'>
            //             {/* <div className='col-2 glasses__items'></div> */}
            //             {this.renderGlassesList()}
            //         </div>
            //     </div>
            // </div>
        )
    }



}
