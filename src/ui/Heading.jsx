// Libraries.
import styled, { css } from "styled-components";

// Different styles.
// Variations.
const heading = {
 h1: css`
  margin-top: 0;
  font-size: 3.2rem;
 `,
 h2: css`
  font-size: 2.4rem;
 `,
 h3: css`
  font-size: 2rem;
 `,
 h4: css`
  font-size: 1.6rem;
 `,
};

// Global styles.
const Heading = styled.h1`
 hyphens: auto;
 font-weight: 600;
 overflow-wrap: break-word;
 ${props => heading[props.as]}
`;

// Exporting.
export default Heading;
