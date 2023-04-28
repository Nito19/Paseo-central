import img1 from "../Cartillas/imges/center.svg";
import img2 from "../Cartillas/imges/map.svg";
import img3 from "../Cartillas/imges/oferta.svg";
import img4 from "../Cartillas/imges/star.svg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import styles from "./cartillas.module.css";

//import { Video } from "./components/Navbar/Video";
export const Cartillas = () => {
  return (
    <>
      <div className="container-fluid  p-5">
        <div className={styles.cart__fondo}>
          <div className="container p-4">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                  slidesPerGroup: 1,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                },

                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                  slidesPerGroup: 3,
                },
              }}
            >
              <div className={styles.cart__carta}>
                <SwiperSlide>
                  <div className={styles.cart__viwer}>
                    <img src={img1} />
                    <div className="row">
                      <a>comidas</a>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <SwiperSlide>
                <div className={styles.cart__viwer}>
                  <img src={img2} />
                  <div className="row">
                    <a>comidas</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cart__viwer}>
                 
                    <img src={img3} />
                    <div className="row">
                      <a>comidas</a>
                    </div>
                  </div>
               
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cart__viwer}>
            
                    <img src={img4} />
                    <div className="row">
                      <a>comidas</a>
                    </div>
                  </div>
              
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
