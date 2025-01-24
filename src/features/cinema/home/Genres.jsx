// Libraries.
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
// API functions.
import getGenres from "../../../services/cinema/home/apiGenres"

// Styles.
const StyledGenres = styled.ul`
 display: flex;
 align-items: center;
 gap: 0.8rem;
`;
const Genre = styled.li`
 padding: 0.4rem 0.8rem;
 font-size: 1.2rem;
 font-weight: 600;
 letter-spacing: 0.75px;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 max-width: 77px;
 backdrop-filter: blur(24px);
 background-color: var(--backdrop-clr);
 border-radius: var(--border-radius-tiny);

 @media (min-width: 464px) {
  & {
   max-width: 148px;
  }
 }
`;

export default function Genres({genres}) {
 const {
  isLoading,
  data,
  error,
 } = useQuery({
  queryKey: ["genres"],
  queryFn: getGenres,
 });

 const genresData =  [...new Set(data?.filter(genre => genres.includes(genre.id)).map(genre => genre.name))]

 return (
  <StyledGenres>
  {
   genresData.slice(0,3)?.map(genre => <Genre key={genre}>{genre}</Genre>)
  }
  </StyledGenres>
 );
}
