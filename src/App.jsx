// Libraries.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Pages.
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
// Cinema Feature.
import Cinema from "./pages/cinema/Cinema";
import CinemaHome from "./pages/cinema/home/Home";

// React query.
const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   staleTime: 0,
  },
 },
});

// Styles.
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
 return (
  <QueryClientProvider client={queryClient}>
   <ReactQueryDevtools initialIsOpen={false} />
   <GlobalStyles />
   <BrowserRouter>
    <Routes>
     <Route element={<AppLayout />}>
      {/*Dashboard Feature.*/}
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />

      {/*Cinema Feature.*/}
      <Route path="cinema" element={<Cinema />}>
       <Route index element={<Navigate replace to="home" />} />
       <Route path="home" element={<CinemaHome />} />
      </Route>
     </Route>
    </Routes>
   </BrowserRouter>
  </QueryClientProvider>
 );
}
