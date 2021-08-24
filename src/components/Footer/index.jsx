import React, { useState } from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import './styles.scss';
const Footer = () => {
  const [navigation] = useState([
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Headphones',
    },
    {
      id: 3,
      name: 'Spekears',
    },
    {
      id: 4,
      name: 'Earphones',
    },
  ]);
  return (
    <footer className="footer">
      <div className="col-1">
        <div className="content-title">
          <p className="title">audiophile</p>
        </div>
        <div className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis nulla voluptas dolores cum id eaque suscipit dolor tempora officiis! Similique qui, veniam hic perspiciatis nam possimus necessitatibus exercitationem nobis!
          Impedit consequatur tempore mollitia blanditiis obcaecati. Est, magni consectetur optio cupiditate nihil ut facilis deserunt rerum necessitatibus aliquid tenetur, non consequuntur dolore facere inventore amet ex magnam nesciunt recusandae. Ipsam.
        </div>
        <div className="copyright">copyright 2021. All Rights reserved</div>
      </div>
      <div className="col-2">
        <nav className="nav-footer">
          {navigation.map((item) => {
            return (
              <div className="content-link" key={item.id}>
                <a href="/" className="link">
                  {item.name}
                </a>
              </div>
            );
          })}
        </nav>
        <div className="social-networks">
          <div className="content-icon">
            <a href="/"  className="link-rs">
              <FaFacebookSquare />
            </a>
          </div>
          <div className="content-icon">
            <a href="/" className="link-rs">
              <FaTwitterSquare />
            </a>
          </div>
          <div className="content-icon">
            <a href="/" className="link-rs">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
