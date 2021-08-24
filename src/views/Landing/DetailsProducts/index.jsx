import React, { useState } from 'react'
import './styles.scss'
import {earphone} from '../../../assets/images/index'
function DetailsProducts() {
    const [count, setCount] = useState(1)
    return (
        <section className="details-products">
            <div className="content-go-back">
                <a href="/" className="go-back">go back</a>
            </div>
            <div className="details">
                <div className="details-image">
                    <img className="image" src={earphone} alt="earphones" />
                </div>
                <div className="details-text">
                    <p className="subtitle">New Product</p>
                    <p className="title">XX99 MARK II HEADPHONES</p>
                    <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab atque sint sed sapiente error quam doloribus dolorum id, enim assumenda minima at suscipit omnis placeat laborum, recusandae perferendis quis incidunt!</p>
                    <p className="price">$ 2,999</p>
                    <div className="content-cart">
                        <div className="cart">
                            <span className='count' onClick={() => setCount(count - 1)}>-</span>
                            <input type="number" readOnly className="inp" value={count} min={0}/>
                            <span className='count' onClick={() => setCount(count + 1)} >+</span>
                        </div>
                        <button className="btn-add">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsProducts
