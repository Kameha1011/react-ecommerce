import Footer from "../../components/Footer";
import { NavbarComp } from "../../components/NavbarComp";

export const Contact = () => {
  return (
    <>
      <NavbarComp transparent={false} />
      <main className="container-fluid row align-items-end justify-content-center gx-0 contactContainer">
        <form className="d-flex justify-content-center flex-column flex-wrap align-items-center p-4 rounded col-12 col-md-10 col-lg-6">
          <h1>Contact Us ✉️</h1>
          <label className="form-label w-75">
            Nombre
            <input type="text" className="form-control" required />
          </label>
          <label className="form-label w-75">
            Email
            <input type="email" className="form-control" required />
          </label>
          <label className="form-label w-75">
            Mensaje
            <textarea
              name="message"
              id="message"
              className="form-control"
            ></textarea>
          </label>
          <button className="btn w-75 mt-2">Enviar</button>
        </form>
        <section className="w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.017678509856!2d-58.369778448909805!3d-34.61358707954611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9c2d70389%3A0xe7b5e9ee316678f!2sPuerto%20Madero%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1681059465575!5m2!1ses-419!2sar"
            allowfullscreen=""
            loading="lazy"
            className=" mapa"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};
