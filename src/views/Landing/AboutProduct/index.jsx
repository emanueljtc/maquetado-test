import React from 'react';
import { aboutImage } from '../../../assets/images';
import './styles.scss';
const AboutProduct = () => {
  return (
    <section className="about-product">
      <div className="col-1">
        <p className="title">
          Bringing you the <span className="span">best</span> audio gear
        </p>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam,
          praesentium exercitationem possimus animi repudiandae, quam explicabo
          unde doloribus cum, eligendi ullam. Eveniet animi ipsa, similique
          veniam libero modi exercitationem!
        </p>
      </div>
      <div className="col-2">
        <div className="content-image">
          <img src={aboutImage} alt="photoabout" className="image" />
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
