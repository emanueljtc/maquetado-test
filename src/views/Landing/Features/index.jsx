import React from 'react';
import { boy, earphoneHand, mac } from '../../../assets/images';
import './styles.scss';

const Features = () => {
  return (
    <section className="feature">
      <div className="content-main">
        <div className="feature-text">
          <p className="title">features</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia
            odit nobis distinctio, illum repellat necessitatibus aut beatae
            laboriosam aperiam fuga itaque rem aliquid velit voluptatibus
            sapiente. Adipisci, esse iusto?
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quia
            odit nobis distinctio, illum repellat necessitatibus aut beatae
            laboriosam aperiam fuga itaque rem aliquid velit voluptatibus
            sapiente. Adipisci, esse iusto?
          </p>
        </div>
        <div className="content-box">
          <p className="title">in the box</p>
          <ul className="list">
            <li className="list-element">
              <span class="span">1x</span> Head Phone unit
            </li>
            <li className="list-element">
              <span class="span">2x</span> Replacement Earcups
            </li>
            <li className="list-element">
              <span class="span">1x</span> User Manual
            </li>
            <li className="list-element">
              <span class="span">1x</span> 3.5mm 5m audio cable
            </li>
            <li className="list-element">
              <span class="span">1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </div>
      <div className="gallery">
        <div className="col-1">
          <div className="content-image mb-1">
            <img src={boy} alt="boy" className="image" />
          </div>
          <div className="content-image">
            <img src={mac} alt="mac" className="image" />
          </div>
        </div>
        <div className="col-2">
          <div className="content-image">
            <img
              src={earphoneHand}
              alt="earphone-hand"
              className="image h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
