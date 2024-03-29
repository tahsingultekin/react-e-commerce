import { Suspense, lazy } from "react";
import Login from "../components/Auth/Login";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const AuthPage = () => {
  const Login = lazy(() => import("../components/Auth/Login"));
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#FAFAFA]">
      <Banner />
      <Header />
      <Navbar />
      <div className="grow flex items-center justify-center md1360:my-16 ">
        <Suspense fallback={<div>Yükleniyor..</div>}>
          <Login />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
