// Libraries.
import styled from "styled-components";

// Components.
import Left from "./left/Left";
import Middle from "./middle/Middle";
import Right from "./right/Right";

// Styles.
const StyledHeader = styled.header`
 grid-column: 1 / -1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 1.6rem;
 padding: 0.8rem 0.8rem 0.6rem;
 background-color: var(--clr-grey-0);
`;

export default function Header() {
 return (
  <StyledHeader>
   <Left />

   <Middle />

   <Right />
  </StyledHeader>
 );
}
