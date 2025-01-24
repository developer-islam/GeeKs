// Libraries.
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

// Styles.
const PlayIcon = styled(FaPlay)`
 position: absolute;
 top: 82px;
 left: 50%;
 transform: translate(-50%, -50%);
 font-size: 3.6rem;
 transition: transform 0.4s, color 0.4s;

 &:hover {
  transform: translate(-50%, -50%) scale(1.2);
  color: var(--clr-brand-600);
 }
`;

export default PlayIcon
