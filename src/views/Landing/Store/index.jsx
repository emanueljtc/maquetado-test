import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { air, ear, markI, speak, speaker, xx59 } from '../../../assets/images';
import './styles.scss';
const Store = () => {
  const [products] = useState([
    {
      id: 1,
      title: 'xx99 mark i',
      image: `${markI}`,
    },
    {
      id: 2,
      title: 'xx59',
      image: `${xx59}`,
    },
    {
      id: 3,
      title: 'zx9 speaker',
      image: `${speaker}`,
    },
  ]);
  return (
    <section className="store">
      <div className="content-title">
        <p className="title">You May Also Like</p>
      </div>
      <div className="list">
        {products.map((product) => {
          return (
            <div className="item-type-one" key={product.id}>
              <div className="content-image">
                <img src={product.image} alt="mark" className="image" />
              </div>
              <div className="content-title">
                <div className="title mt-1">{product.title}</div>
              </div>
              <div className="content-btn">
                <button className="btn">See Product</button>
              </div>
            </div>
          );
        })}
        <div className="item-type-two" key={1}>
          <div className="content-main">
            <div className="content-image">
              <img src={ear} alt="mark" className="image" />
            </div>
            <div className="content-title ">
              <div className="title mt-1 fz-1">headphones</div>
            </div>
            <div className="content-btn">
              <p className="text-action">shop </p>
              <FaAngleRight />
            </div>
          </div>
        </div>
        <div className="item-type-two">
          <div className="content-main">
            <div className="content-image">
              <img src={speak} alt="mark" className="image" />
            </div>
            <div className="content-title">
              <div className="title mt-1 fz-1">speakers</div>
            </div>
            <div className="content-btn">
              <p className="text-action">shop </p>
              <FaAngleRight />
            </div>
          </div>
        </div>
        
        <div className="item-type-two">
          <div className="content-main">
            <div className="content-image">
              <img src={air} alt="mark" className="image" />
            </div>
            <div className="content-title">
              <div className="title mt-1 fz-1">earphones</div>
            </div>
            <div className="content-btn">
              <p className="text-action">shop </p>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Store;
