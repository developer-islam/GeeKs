// Libraries.
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// API functions.
import getChanges from "../../../../services/cinema/home/apiChanges"

// Components.
import Intro from "../../../../features/cinema/home/Intro";
import Genres from "../../../../features/cinema/home/Genres";
import ContentTitle from "../../../../features/cinema/home/ContentTitle";
import Facts from "../../../../features/cinema/home/Facts";
import Overview from "../../../../features/cinema/home/Overview";

// Import Swiper styles
import 'swiper/css';

const StyledSwiper = styled(Swiper)`
 min-height: calc(100dvh - 50px);
`

export default function Hero() {
 const {
  isLoading,
  data,
  error,
 } = useQuery({
  queryKey: ["moviesSeriesList"],
  queryFn: getChanges,
 });

 return (
  <StyledSwiper
    // autoplay={{
    //   delay: 8000,
    //   disableOnInteraction: false,
    // }}
    modules={[Autoplay]}
  >
   {
    data?.map(content => <SwiperSlide key={content.id} type={content.title ? "movie" : "series"}>
      <Intro bg={content.backdrop_path}>
       <Genres  genres={content.genre_ids} />

       <ContentTitle type={content.title ? "movie" : "tv"} id={content.id} title={content.title} />

       <Facts release={content.title ? content.release_date : content.first_air_date} language={content.original_language} vote={content.vote_average} />

       <Overview overview={content.overview} small={true} />
      </Intro>
     </SwiperSlide>
    )
   }
  </StyledSwiper>
 );
}
