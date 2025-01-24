// Libraries.
import styled from "styled-components";

// Styles.
const StyledOverview = styled.p`
 line-height: 1.6;
 opacity: 0.7;
 max-width: 444px;
`;

export default function Overview({overview, small}) {
 return (
  <StyledOverview>
   {small ? overview.slice(0, 142) + "..." : overview}
  </StyledOverview>
 );
}
