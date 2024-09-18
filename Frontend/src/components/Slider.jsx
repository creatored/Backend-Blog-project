import { Pagination, Navigation, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

export default () => {
  return (
    <Swiper
      style={{padding: '20px'}}
      spaceBetween={50}
      slidesPerView={2}
      grid={{
        rows: 2,
        fill: 'row',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Grid]}
      className="mySwiper"
    >
      <SwiperSlide style={{ backgroundColor: 'red', padding: '20px' }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'green', padding: '20px' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'blue', padding: '20px' }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'yellow', padding: '20px' }}>Slide 4</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'pink', padding: '20px' }}>Slide 5</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'orange', padding: '20px' }}>Slide 6</SwiperSlide>
    </Swiper>
  );
};