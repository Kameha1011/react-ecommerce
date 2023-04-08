import Footer from "../../components/Footer";
import { NavbarComp } from "../../components/NavbarComp";

export const Contact = () => {
  return (
    <>
      <NavbarComp />
      <main className="container-fluid row align-items-center justify-content-center contactContainer">
        <form className="bg-dark text-warning d-flex justify-content-center flex-column flex-wrap align-items-center p-4 rounded col-12 col-md-10 col-lg-6">
          <h1>Contact Us ✉️</h1>
          <label className="form-label w-75">
            Nombre
            <input type="text" className="form-control" required/>
          </label>
          <label className="form-label w-75">
            Email
            <input type="email" className="form-control" required/>
          </label>
          <label className="form-label w-75">
            Mensaje
            <textarea
              name="message"
              id="message"
              className="form-control"
            ></textarea>
          </label>
          <button className="btn btn-outline-warning w-75 mt-2">Enviar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};
