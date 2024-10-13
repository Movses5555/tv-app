import React, { useState, useEffect } from 'react';
import { getImageUrl } from '@/utils/getImageUrlByName.js';
import { convertSecondsToTime } from '@/utils/convertSecondsToTime.js';
import PlayIcon from '@/assets/icons/play.png';

const defaultVideoSrc = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';


export const FeaturedVideo = ({ video }) => {
  const [CoverImageSrc, setCoverImageSrc] = useState('')
  const [FeaturedTitleImageSrc, setFeaturedTitleImageSrc] = useState('')
  const [videoSrc, setVideoSrc] = useState(video.VideoUrl || defaultVideoSrc);

  const handleVideoPlayError = () => {
    setVideoSrc(defaultVideoSrc);
  };

  useEffect(() => {
    if (video?.CoverImage) {
      getImageUrl(video.CoverImage).then((src) => setCoverImageSrc(src));
    }
    if (video?.TitleImage) {
      getImageUrl(video.TitleImage).then((src) => setFeaturedTitleImageSrc(src));
    }
  }, [video]);

  return (
    <div className="pl-[157px]">
      {
        video?.isPlaying ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-auto max-h-[70vh]"
            onError={handleVideoPlayError}
          />
        ) : (
          <div className='relative'>
            <img
              src={CoverImageSrc}
              alt={video.Title}
              className='w-screen max-h-[70vh] object-contain'
            />
            <div className="w-full h-full absolute top-0 left-0 z-10  flex items-center">
              <div className='w-full'>
                <p className='text-2xl text-gray-400'>MOVIE</p>
                <img
                  src={FeaturedTitleImageSrc}
                  alt={video.Title}
                  className='max-w-[800px] w-1/2'
                />
                <div className='mt-[27px] mb-[14px] flex gap-4 text-[30px] leading-[42px] text-center'>
                  <p>{video?.ReleaseYear}</p>
                  <p>{video?.MpaRating}</p>
                  <p>{convertSecondsToTime(video?.Duration)}</p>
                </div>
                <p className='max-w-[900px] w-1/2 text-[32px] leading-[40px]'>{video?.Description}</p>
                <div className='mt-7 flex gap-5'>
                  <button
                    className='w-[240px] h-[72px] flex items-center justify-center gap-1 bg-white rounded-[40px]'
                    onClick={() => {}}
                  >
                    <div className='flex items-center gap-3 h-[30px]'>
                      <img
                        src={PlayIcon}
                        className='w-4 h-5'
                      />
                      <p className='text-black font-bold text-[32px] leading-[30px] mt-2'>Play</p>
                    </div>
                  </button>
                  <button
                    className='w-[240px] h-[72px] flex items-center justify-center bg-blue-600 rounded-[40px]'
                    onClick={() => {}}
                  >
                    <span className='font-bold text-[32px] leading-[30px] mt-2'>More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

