import React, { useRef, useState } from "react";
import img1 from "./showinfi/img1.png";
import img2 from "./showinfi/img2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classNames from "classnames";
import styles from "./show_infantiles.module.css";

export const Show_infantiles = () => {
  return (
    <>
      <div className={classNames("container-fluid", styles.shos_css)}>
        <h1 className="">Shows infatiles</h1>
        <h4>
          Disfruta de nuestros shwos con familia y una exprecnia unica que le
          ofecemos
        </h4>
        <div
          className={classNames(
            "row g-2",
            styles.fila_container
          )}
        >
          <div
            className={classNames(
              "col-6 ",
              styles.container_cocierto
            )}
          >
            <div className={styles.conciertos_text}>
              <h2>Mario Bros ¡</h2>
              <p>
                No esperes de ver la pelicula vivie una experiencia chevere{" "}
              </p>
              <a href="https://www.google.com/">Dias de apertura</a>
            </div>
          </div>
          <div className={classNames("col-6  d-flex justify-content-around")}>
            <img src={img1} />
          </div>
        </div>
        <div
          className={classNames(
            "row g-2",
            styles.fila_container
          )}
        >
          <div
            className={classNames(
              "col-6 d-flex justify-content-center"
            )}
          >
            <img className={styles.img2} src={img2} />
          </div>
          <div
            className={classNames(
              "col-6 ",
              styles.container_cocierto
            )}
          >
            <div className={styles.conciertos_text}>
              <h2>Mario Bros ¡</h2>
              <p>
                No esperes de ver la pelicula vivie una experiencia chevere{" "}
              </p>
              <a href="https://www.google.com/">Dias de apertura</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
