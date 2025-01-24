// Libraries.
import styled from "styled-components";

// Styles.
const StyledIntro = styled.section`
 background: linear-gradient(
   to right,
   rgb(0 0 0 / 85%),
   rgb(0 0 0 / 48%),
   transparent
  ),
  url("https://image.tmdb.org/t/p/original${props => props.$bg}")
   center/cover no-repeat;
 padding: 2.4rem 2.4rem 164px 2.4rem;
 color: var(--clr-grey-0);
 min-height: calc(100dvh - 50px);
 font-size: 1.4rem;
 display: flex;
 align-items: flex-end;
`;
const IntroContent = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2.4rem;
`

export default function Intro({children, bg}) {
 return (
  <StyledIntro $bg={bg}>
   <IntroContent>
    {children}
   </IntroContent>
  </StyledIntro>
 );
}
