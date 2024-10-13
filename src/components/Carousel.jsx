import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


export const Carousel = ({data, onClickVideo}) => {
  useEffect(() => {
    new Swiper('.centered-slide-carousel', {
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: '.centered-slide-carousel',
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper centered-slide-carousel swiper-container relative w-[calc(100vw-172px)] h-full mx-0">
        <div className="swiper-wrapper w-full h-full overflow-auto scrollbar-hide">
          {
            data?.map((item, index) => {
              if(index > 49) {
                return null;
              }
              return (
                <div 
                  key={index}
                  className="swiper-slide max-w-[200px] w-[200px] h-[278px] mr-0 cursor-pointer first:ml-0 mx-2"
                  style={{marginRight: 0}}
                >
                  <div
                    className='w-[200px] h-[278px] mr-0'
                    onClick={() => onClickVideo(item)}
                  >
                    <img src={item.CoverImageSrc} alt={item.Title} className='w-full h-full'/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};