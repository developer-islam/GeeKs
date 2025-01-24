// Libraries.
import styled from "styled-components";

// Components.
import MainNav from "./MainNav";

// Styles.
const StyledSidebar = styled.aside`
 font-size: 1.6rem;
 padding-top: 3.2rem;
 background-color: var(--clr-grey-0);
 margin-left: -38px;
 transition: margin-left 0.4s;

 &.show {
  margin-left: 0px;
 }
`;

// Exporting.
export default function Sidebar() {
 return (
  <StyledSidebar className="show">
   <MainNav />
  </StyledSidebar>
 );
}
