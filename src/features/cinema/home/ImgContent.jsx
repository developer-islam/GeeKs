// Libraries.
import styled, { css } from "styled-components";

const sizes = {
 normal: css`
  width: 150px;
  height: 225px;
 `,
 wide: css`
  width: 300px;
  max-height: 164px;
 `,
 small: css`
  width: 116px;
  height: 174px;
 `,
};

// Styles.
const ImgContent = styled.img`
 border-radius: 16px;
 object-fit: cover;
 object-position: center;
 ${props => sizes[props.$size]}
`;

export default ImgContent;
