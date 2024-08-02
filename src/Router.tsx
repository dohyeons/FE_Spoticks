import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Reservation from "./pages/Reservation";
import MatchList from "./pages/matchList/MatchList";
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/NotFound";
import Registration from './pages/admin/Registration';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/match-list" element={<MatchList />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
