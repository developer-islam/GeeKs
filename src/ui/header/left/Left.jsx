// Libraries.
import { FaSliders } from "react-icons/fa6";
import styled from "styled-components";

// Components.
import Button from "../../Button";
import Logo from "./Logo";

// Styles.
const StyledLeft = styled.div`
 display: flex;
 align-items: center;
 gap: 1.6rem;
`;

export default function Left() {
 return (
  <StyledLeft>
   <Logo />

   <Button mobile={true} variation="toggle">
    <FaSliders />
   </Button>
  </StyledLeft>
 );
}
