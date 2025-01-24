// Libraries.
import { FaHeart, FaHouse, FaTv, FaYoutube } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

// Links.
const links = [
 {
  page: "cinema",
  path: "/cinema/home",
  icon: <FaHouse />,
 },
]

// Styles.
const AppsNavList = styled.ul`
 display: flex;
 align-items: center;
 gap: 3.2rem;
 font-size: 1.6rem;
 position: absolute;
 top: calc(100% + 16px);
 right: 50%;
 transform: translateX(50%);
 backdrop-filter: blur(24px);
 color: var(--clr-grey-0);
 background-color: var(--backdrop-clr);
 box-shadow: var(--shadow-md);
 border-radius: var(--border-radius-lg);
 padding: 1.6rem 2rem;
 opacity: 0;
 visibility: hidden;
 pointer-events: none;
 transition: opacity 0.4s, visibility 0.4s;

 @media (min-width: 464px) {
  & {
   position: static;
   transform: translateX(0);
   backdrop-filter: blur(0);
   background-color: transparent;
   box-shadow: none;
   border-radius: var(--border-radius-lg);
   padding: 0;
   opacity: 1;
   visibility: visible;
   pointer-events: auto;
   color: inherit;
  }
 }

 &.show {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
 }
`;
const StyledNavLink = styled(NavLink)`
 &:link,
 &:visited {
  transition: color 0.4s;
 }

 &:hover,
 &:active,
 &:link.active,
 &:visited.active {
  color: var(--clr-brand-600);
 }
`;

export default function AppsNav() {
 const isDashboard = useLocation().pathname.slice(1) !== "dashboard";

 return (
  isDashboard && (
   <nav>
    <AppsNavList>
     <li>
      <StyledNavLink to="/cinema/home">
       <FaHouse />
      </StyledNavLink>
     </li>

     <li>
      <StyledNavLink to="/cinema/channels">
       <FaTv />
      </StyledNavLink>
     </li>

     <li>
      <StyledNavLink to="/cinema/youtube">
       <FaYoutube />
      </StyledNavLink>
     </li>

     <li>
      <StyledNavLink to="/cinema/watchlist">
       <FaHeart />
      </StyledNavLink>
     </li>
    </AppsNavList>
   </nav>
  )
 );
}
