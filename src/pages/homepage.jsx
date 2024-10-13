import React, { useState, useEffect } from 'react';
import { FeaturedVideo } from '@/components/FeaturedVideo.jsx';
import TrendingCarousel from '@/components/TrendingCarousel';
import videosData from '@/data/videos.json';


export const Homepage = () => {
   const [featuredVideo, setFeaturedVideo] = useState(videosData.Featured);
   const [trendingVideos, setTrendingVideos] = useState();
  
  const reorderArray = (data, targetId) => {
   const targetIndex = data.findIndex(item => +item.Id === +targetId);
   if (targetIndex === -1) {
      return data;
   }
   const [targetItem] = data.splice(targetIndex, 1);
   return [targetItem, ...data];
};

   useEffect(() => {
      const lastSeenVideoId = sessionStorage.getItem('lastSeenVideoId');
      if (lastSeenVideoId) {
         const video = videosData?.TendingNow?.find(item => {
            if(+item.Id === +lastSeenVideoId) {
               return item
            }
         });
         if(video) {
            setFeaturedVideo(video);
            let sortedData = reorderArray([...videosData.TendingNow], lastSeenVideoId);
            sortedData = sortedData?.length > 50 ? sortedData.slice(0, 50) : sortedData;
            setTrendingVideos([...sortedData])
         } else {
            setFeaturedVideo(videosData.Featured)
            setTrendingVideos(videosData?.TendingNow?.length > 50 ? videosData?.TendingNow.slice(0, 50) : videosData?.TendingNow)
         }
      } else {
         setFeaturedVideo(videosData.Featured)
         setTrendingVideos(videosData?.TendingNow?.length > 50 ? videosData?.TendingNow.slice(0, 50) : videosData?.TendingNow)
      }
   }, [videosData])

   const handleMovieClick = (video) => {
      video.isPlaying = true;
      setFeaturedVideo(video)
      const sortedData = reorderArray(videosData.TendingNow, video.Id);
      setTrendingVideos(sortedData);
      sessionStorage.setItem('lastSeenVideoId',  video.Id);
   }

   return (
      <div className='h-full w-full'>
         <FeaturedVideo video={featuredVideo} />
         {
            trendingVideos && (
               <TrendingCarousel videos={trendingVideos} onClickVideo={handleMovieClick} />
            )
         }
      </div>
   )
}
