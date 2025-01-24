// Libraries.
import { FaChartSimple, FaFilm, FaGear, FaMusic } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Components.
import Tooltip from "../Tooltip";

// Styles.
const MainNavList = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1.6rem;
`;
const StyledNavLink = styled(NavLink)`
 &:link,
 &:visited {
  margin: 0 0.8rem;
  padding: 0.6rem;
  position: relative;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.4s, color 0.4s;
 }

 &:hover,
 &:active,
 &:link.active,
 &:visited.active {
  color: var(--clr-grey-0);
  background-color: var(--clr-brand-600);
 }

 &:hover span {
  left: calc(100% + 16px);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
 }
`;

// Links.
const links = [
 {
  name: "Dashboard",
  path: "/dashboard",
  icon: <FaChartSimple />,
 },
 {
  name: "Cinema",
  path: "/cinema",
  icon: <FaFilm />,
 },
 {
  name: "Music",
  path: "/music",
  icon: <FaMusic />,
 },
 {
  name: "Settings",
  path: "/settings",
  icon: <FaGear />,
 },
]

// Exporting.
export default function MainNav() {
 return (
  <nav>
   <MainNavList>
    {
     links.map(link => <Link key={link.path} link={link} />)
    }
   </MainNavList>
  </nav>
 );
}

function Link({link}) {
 return (
  <li>
   <StyledNavLink to={link.path}>
    <Tooltip $side="left">{link.name}</Tooltip>
    {link.icon}
   </StyledNavLink>
  </li>
 )
}
