// Libraries.
import styled from "styled-components";

// Styles.
const StyledVideoPlayer = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0,0,0,0.5);
 z-index: 1;

 &::after {
  content: "";
 }
`
const Iframe = styled.iframe`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 88%;
 height: 404px;
 border: 1px solid var(--clr-grey-500);
 border-radius: 16px;
 z-index: 1;
`

export default function VideoPlayer() {
 return (
  <StyledVideoPlayer>
   <Iframe src="https://www.youtube.com/embed/BdJKm16Co6M" allowFullScreen></Iframe>
  </StyledVideoPlayer>
 );
}
