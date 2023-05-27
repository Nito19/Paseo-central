import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./card.css";

export const Card = ({ imageSource, title, text, url }) => {
  return (

    <div className="container-fluid">
        <div className="card text-center bg-dark animate__animated animate__fadeInUp ">
          <div className="overflow">
            <img
              src={imageSource}
              alt="a wallpaper"
              className="card-img-top" />
          </div>
          <div className="card-body text-light">

            <a
              href={url ? url : "#!"}
              target="_blank"
              className="btn btn-outline-secondary border-0"
              rel="noreferrer"
            >
              Conocenos
            </a>
          </div>
        </div>
      </div>
 

  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
