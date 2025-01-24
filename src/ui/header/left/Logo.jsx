// Libraries.
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles.
const LogoImg = styled.img`
 width: 32px;
 height: 32px;
 object-fit: cover;
 object-position: center;
`;

export default function Logo() {
 return (
  <Link to="/dashboard">
   <LogoImg
    src="https://zaffbjyiqrzeeiagvvde.supabase.co/storage/v1/object/sign/GeeKs's%20Images/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJHZWVLcydzIEltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTczNzI4MzcyNiwiZXhwIjoxOTg5NTcxNzI2fQ.k8sC210myNHWvIMT2cJsryS4zEcIXPpf7NcAPHEp7cs&t=2025-01-19T10%3A48%3A48.179Z"
    alt="GeeKs's logo"
   />
  </Link>
 );
}
