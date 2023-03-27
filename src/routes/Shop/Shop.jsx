import { NavbarComp } from "../../components/NavbarComp";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function Shop() {
  return (
    <>
      <NavbarComp />
      <main className="min-vh-100 d-flex">
        <Categories />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Shop;
