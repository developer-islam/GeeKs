// Libraries.
import { FaBarsStaggered } from "react-icons/fa6";
import styled from "styled-components";

// Components.
import Button from "../../Button";
import AppsNav from "./AppsNav";

// Styles.
const StyledMiddle = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 position: relative;
`;

export default function Middle() {
 return (
  <StyledMiddle>
   <AppsNav />

   <Button mobile={true} variation="toggle">
    <FaBarsStaggered />
   </Button>
  </StyledMiddle>
 );
}
