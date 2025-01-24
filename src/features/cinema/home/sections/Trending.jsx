// Libraries.
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// API functions.
import getTrending from "../../../../services/cinema/home/apiTrending"

// Components.
import ImgContent from "../ImgContent";

// Styles.
const StyledTrending = styled.section`
 position: relative;

 & .swiper {
  position: absolute;
  top: -50%;
  padding: 0 1.6rem;
  transform: translateY(-50%);
  z-index: 8;
 }

 & .swiper .swiper-slide {
  width: fit-content !important;
 }
`;

export default function Trending() {
 const {
  isLoading,
  data,
  error,
 } = useQuery({
  queryKey: ["trending"],
  queryFn: getTrending,
 });

 return (
  <StyledTrending>
   <Swiper
    slidesPerView="auto"
    spaceBetween={15}
    grabCursor={true}
   >
    {
     data?.map(content => <SwiperSlide key={content.id}>
       <Link to="{content.id}">
        <ImgContent
         $size="normal"
         src={`https://image.tmdb.org/t/p/w342${content.poster_path}`}
         alt={content.title}
        />
       </Link>
      </SwiperSlide>
     )
    }
   </Swiper>
  </StyledTrending>
 );
}
