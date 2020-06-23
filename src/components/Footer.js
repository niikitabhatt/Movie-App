import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className="text-center  bg-dark text-light footerClass ">
      Developed BY: <span className="text-warning">Nikita Bhatt</span>, Using
      <i className="fa fa-react" /> React Js , React Router &amp; Redux JS
      integrated with external movies Data API &nbsp;
      <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
        OMDB
      </a>
    </div>
  );
};

export default Footer;
