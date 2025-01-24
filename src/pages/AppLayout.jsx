// Libraries.
import styled from "styled-components";

// Components.
import Header from "../ui/header/Header";
import Sidebar from "../ui/sidebar/Sidebar";
import Main from "../ui/main/Main";

// Styles.
const StyledAppLayout = styled.section`
 display: grid;
 grid-template-columns: auto 1fr;
 grid-template-rows: auto 1fr;
 height: 100dvh;
`;

export default function AppLayout() {
 return (
  <StyledAppLayout>
   <Header />

   <Sidebar />

   <Main />
  </StyledAppLayout>
 );
}
