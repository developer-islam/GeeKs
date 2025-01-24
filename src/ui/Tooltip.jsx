// Libraries.
import styled, { css } from "styled-components";

// Sizes.
const sides = {
 top: css`
 `,
 right: css`
 `,
 bottom: css`
 `,
 left: css`
  top: 50%;
  left: calc(100% + 32px);
  transform: translateY(-50%);

 &::after {
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  border-color: transparent var(--clr-grey-950) transparent transparent;
 }
 `,
};

// Styles.
const Tooltip = styled.span`
 position: absolute;
 font-size: 1.4rem;
 font-weight: 600;
 letter-spacing: 0.75px;
 color: var(--clr-grey-0);
 padding: 0.4rem 0.8rem;
 border-radius: var(--border-radius-sm);
 background-color: var(--clr-grey-950);
 opacity: 0;
 visibility: hidden;
 pointer-events: none;
 z-index: 8;
 transition: all 0.4s;

 &::after {
  content: "";
  position: absolute;
  border-width: 5px;
  border-style: solid;
 }

 ${props => sides[props.$side]}
`;

// Exporting.
export default Tooltip
