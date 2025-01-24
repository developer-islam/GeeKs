// Libraries.
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// API functions.
import getPopular from "../../../../services/cinema/home/apiPopular"

// Import Swiper styles
import 'swiper/css';

// Components.
import Heading from "../../../../ui/Heading";
import ImgContent from "../ImgContent";
import Tagline from "../Tagline";
import VideoPlayer from "../VideoPlayer";
import PlayIcon from "../PlayIcon";

// Styles.
const StyledTrailers = styled.section`
 background: linear-gradient(
   to left bottom,
   rgba(0, 0, 0, 0.5),
   rgba(0, 0, 0, 0.8)
  ),
  url("https://image.tmdb.org/t/p/original/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg")
   center/cover no-repeat;
 padding: 188px 2.4rem 6.4rem;
 color: var(--clr-grey-0);
 font-size: 1.6rem;
 text-align: center;

 & .swiper .swiper-slide {
  width: fit-content;
 }
`;
const StyledHeading = styled(Heading)`
 margin: 1.2rem 0 0.8rem;
 transition: opacity 0.4s;

 &:hover {
  opacity: 0.6;
 }
`;

export default function Trailers() {
 const {
  isLoading,
  data,
  error,
 } = useQuery({
  queryKey: ["trailers"],
  queryFn: getPopular,
 });

 console.log(data)

 return (
  <StyledTrailers>
   <Swiper
    slidesPerView="auto"
    spaceBetween={32}
    grabCursor={true}
   >
   {
    data?.map(content =>  <SwiperSlide key={content.id}>
     <Link to="#">
      <ImgContent
       $size="wide"
       src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
       alt="Trailers image"
      />

      <PlayIcon />
      <StyledHeading as="h2">{content.title}</StyledHeading>
      <Tagline>London's for the taking.</Tagline>
     </Link>
    </SwiperSlide> )
   }
{/*    <SwiperSlide>
     <Link to="#">
      <ImgContent
       $size="wide"
       src="https://image.tmdb.org/t/p/original/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg"
       alt="Trailers image"
      />

      <PlayIcon />
      <StyledHeading as="h2">Vikings</StyledHeading>
      <Tagline>London's for the taking.</Tagline>
     </Link>
    </SwiperSlide>*/}
   </Swiper>
  </StyledTrailers>
 );
}
