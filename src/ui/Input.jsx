// Libraries.
import styled from "styled-components";

// Different styles.
// Variations.

// Global styles.
const Input = styled.input`
 padding: 0.8rem 1.6rem 0.8rem 3.2rem;
 background-color: rgba(0, 0, 0, 0.1);
 border-radius: var(--border-radius-md);
 border: 1px solid transparent;
 width: 100%;
 transition: border-color 0.4s;

 &:focus {
  border-color: var(--clr-brand-600);
 }
`;

// Exporting.
export default Input;
