import { Outlet } from "react-router-dom";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Menu from "./menu";
import Footer from "./footer";


function LayoutSite() {
  return (
    <>
      <Header />
      <Menu />

      <Outlet />  
      <Footer/>
  
    </>
  );
}

export default LayoutSite;