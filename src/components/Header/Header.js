import React from "react";
import video from "./video/paseovideo.mp4";
import styles from "./header.module.css";
import classNames from "classnames";
export const Header = () => {
  return (
    <>
      <div
        className={classNames(
          styles.con__nav,
          "container-fluid border border-dark"
        )}
      >
        <div className="row">
          <video width="1900" height="650" src={video} loop autoPlay muted />
        </div>
      </div>
    </>
  );
};
export default Header;