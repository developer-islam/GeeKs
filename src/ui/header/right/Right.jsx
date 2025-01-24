// Libraries.
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";

// Components.
import Button from "../../Button";
import Input from "../../Input";
import User from "./User";

// Styles.
const StyledRight = styled.div`
 position: relative;
 padding-left: 1.6rem;
 display: flex;
 align-items: center;
 gap: 1.6rem;

 &::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 20px;
  background-color: var(--clr-grey-200);
 }
`;
const StyledForm = styled.form`
 position: absolute;
 top: calc(100% + 16px);
 right: 8px;
 background-color: var(--clr-grey-0);
 box-shadow: var(--shadow-md);
 border-radius: var(--border-radius-lg);
 padding: 2.4rem 1.6rem;
 font-size: 1.6rem;
 z-index: 8;
 width: 252px;
 opacity: 0;
 visibility: hidden;
 pointer-events: none;
 z-index: 8;
 transition: all 0.4s;

 &.show {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
 }

 & svg {
  position: absolute;
  top: 50%;
  transform: translate(8px, -50%);
  z-index: 1;
  transition: color 0.4s;
 }

 &:has(input:focus) svg {
  color: var(--clr-brand-600);
 }
`;


export default function Right() {
 return (
  <StyledRight>
   <div>
    <Button variation="toggle">
     <FaMagnifyingGlass />
    </Button>

    <StyledForm>
     <FaMagnifyingGlass />
     <Input type="search" name="search" placeholder="Search Here..." />
    </StyledForm>
   </div>

   <User />
  </StyledRight>
 );
}
