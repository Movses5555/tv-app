import React, { useEffect, useState } from 'react';
import { getImageUrl } from '@/utils/getImageUrlByName.js';
import { Carousel } from './Carousel';

const TrendingCarousel = ({ videos, onClickVideo }) => {
  const [data, setData] = useState([]);

  const convertData = (videos) => {
    let newVideoData = [];
    Promise.all(videos.map((video) => getImageUrl(video.CoverImage)))
      .then((CoverImageSrcs) => {
        newVideoData = videos.map((video, index) => {
          return {
            ...video,
            CoverImageSrc: CoverImageSrcs[index],
          }
        });
        setData(newVideoData);
      });
  }

  useEffect(() => {
    convertData([...videos])
  }, [videos])

  
  return (
    <div className='w-[calc(100%-158px)] ml-[157px] bg-[#040404] mt-7'>
      <p className='text-[32px] font-medium leading-[38px] mb-[15px]'>Trending Now</p>
      <Carousel
        data={data}
        onClickVideo={onClickVideo}
      />
    </div>
  );
};

export default TrendingCarousel;
