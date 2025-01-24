// Libraries.
import styled, { css } from "styled-components";

// Different styles.
// sizes.
const sizes = {};

// Variations.
const variations = {
 toggle: css`
  font-size: 1.6rem;
  transition: color 0.4s;

  &:hover {
   color: var(--clr-brand-600);
  }
 `,
 square: css`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.4s, color 0.4s;

  &:hover,
  &.active {
   color: var(--clr-grey-0);
   background-color: var(--clr-brand-900);
  }
 `,
};

// If element is link.
const LinkEle = styled.a`
 ${props => variations[props.$variation]}
 ${props => sizes[props.size]}

 ${props =>
  props.$mobile === true &&
  `
  @media (min-width: 464px) {
   & {
    display: none;
   }
 `}
`;

// If element is button.
const ButtonEle = styled.button`
 border: none;
 outline: none;
 color: inherit;
 cursor: pointer;
 font-family: inherit;
 background-color: transparent;
 ${props => variations[props.$variation]}
 ${props => sizes[props.$size]}

 ${props =>
  props.$mobile === true &&
  `
  @media (min-width: 464px) {
   & {
    display: none;
   }
 `}

	&:has(svg) {
  line-height: 0;
 }
`;

// Exporting.
export default function Button({ children, as, mobile, variation, size }) {
 // If element is button or a.
 if (as === "a")
  return (
   <LinkEle $mobile={mobile} $variation={variation} $size={size}>
    {children}
   </LinkEle>
  );
 else
  return (
   <ButtonEle $mobile={mobile} $variation={variation} $size={size}>
    {children}
   </ButtonEle>
  );
}
