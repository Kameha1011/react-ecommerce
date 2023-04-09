import { NavbarComp } from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import { Outlet} from "react-router-dom";

function Shop() {
 
  return (
    <>
      <NavbarComp transparent={false} />
      <main className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Shop;
