import styles from "./CarSelection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Card } from "../carSelection/Card";

export const CarSelection = () => {
  return (
    <div className={styles.car_selection}>
      <div className={styles.heading}>
        <h1>Explore Your Travel Options</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Largest Car Rental Service in the Country</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Audi"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="BMW"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/16033914/pexels-photo-16033914/free-photo-of-black-ford-car-off-road.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Ford"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/14073070/pexels-photo-14073070.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Honda"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/9846085/pexels-photo-9846085.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Hyundai"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/11922002/pexels-photo-11922002.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Lamborghini"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/3778776/pexels-photo-3778776.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Mercedes-Benz"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/13711964/pexels-photo-13711964.png?auto=compress&cs=tinysrgb&w=1600"
              text="Nissan"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image="https://images.pexels.com/photos/11034778/pexels-photo-11034778.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Toyota
"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
