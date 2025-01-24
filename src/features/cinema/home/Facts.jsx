// Libraries.
import styled from "styled-components";

// Styles.
const StyledFacts = styled.div`
 font-weight: 600;
 letter-spacing: 0.75px;
 font-size: 1.2rem;
 opacity: 0.6;
 display: flex;
 align-items: center;
 gap: 0.8rem;
`;
const Certification = styled.span`
 padding: 0.4rem 0.9rem;
 border: 1px solid var(--clr-grey-0);
 font-size: 1.1rem;
 border-radius: 88px;
`;
const Dot = styled.span`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 0.2rem;

 &::after {
  content: "";
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: var(--clr-grey-0);
 }
`;

export default function Facts({release, language, vote}) {
 return (
  <StyledFacts>
   <span>{release.split("-")[0]}</span>
   <Dot>&nbsp;</Dot>
   <Certification>PG-13</Certification>
   <Dot>&nbsp;</Dot>
   <span>{language}</span>
   <Dot>&nbsp;</Dot>
   <span>{Math.trunc(vote * 10)}%</span>
  </StyledFacts>
 );
}
