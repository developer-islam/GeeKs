// Libraries.
import styled, { css } from "styled-components";

// Sizes.
const sizes = {
 small: css`
  width: 32px;
  height: 32px;
 `,
 medium: css`
  width: 48px;
  height: 48px;
 `,
};

// Styles.
const StyledAvatar = styled.img`
 cursor: pointer;
 object-fit: cover;
 border-radius: 50%;
 object-position: center;
 border: 1px solid var(--clr-brand-200);
 transition: border-color 0.4s;

 ${props => sizes[props.$size]}

 &:hover {
  border-color: var(--clr-brand-600);
 }
`;

// Exporting.
export default function Avatar({ size }) {
 return (
  <StyledAvatar
   $size={size}
   src="https://zaffbjyiqrzeeiagvvde.supabase.co/storage/v1/object/public/avatars/default-female.jpeg"
   alt="Avatar"
  />
 );
}
