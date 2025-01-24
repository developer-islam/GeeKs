// Libraries.
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Styles.
const StyledMain = styled.main`
 overflow: auto;
 border-radius: 24px;
 margin: 0 0.4rem 0.4rem 0;
 background-color: var(--clr-grey-100);

 &::-webkit-scrollbar {
  width: 0px;
 }
`;

export default function Main() {
 return (
  <StyledMain>
   <Outlet />
  </StyledMain>
 );
}
