// Libraries.
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
// API functions.
import getTitle from "../../../services/cinema/home/apiTitle"

// Styles.
const Img = styled.img`
 max-width: 222px;
 max-height: 164px;
 object-position: center;
 object-fit: contain;
 }

 @media (min-width: 464px) {
  img {
   max-width: 364px;
  }
 }
`;

export default function ContentTitle({type, id, title}) {
 const [img, setImg] = useState()

 getTitle(type, id).then(data => {
  setImg(data)
 })

 return (
  <Link to={id} type={type}>
   {
    img ?  <Img
    src={`https://image.tmdb.org/t/p/w500${img}`}
    alt="Title"
   /> : title
   }
  </Link>
 );
}
