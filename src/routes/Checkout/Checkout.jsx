import Footer from "../../components/Footer";
import { NavbarComp } from "../../components/NavbarComp";

export const Checkout = () => {
  return (
    <>
      <NavbarComp />
      <main className="container min-vh-100">
        <h2 className="display-1 pt-5">Checkout</h2>
        <div className="d-flex flex-column flex-lg-row gap-2">
        <form className="border-top border-warning p-3" id="checkoutForm">
          <div className="row ">
            <label className="col-6 col-md-4 mb-3">
              Name<sup>*</sup>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </label>
            <label className="col-6 col-md-4 mb-3">
              Last Name<sup>*</sup>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
              />
            </label>
            <label className="col-12 col-md-8 mb-2">
              Country<sup>*</sup>
              <select name="country" id="country" className="form-select">
                <option selected> Choose a country </option>
                <option value="Argentina">Argentina</option>
                <option value="Paraguay">Paraguay</option>
              </select>
            </label>
            <label className="col-12 col-md-8 col-md-8 mb-3">
              Address 1<sup>*</sup>
              <input
                type="text"
                name="address1"
                id="address1"
                className="form-control"
              />
            </label>
            <label className="col-12 col-md-8 mb-3">
              Address 2<sup>*</sup>
              <input
                type="text"
                name="address2"
                id="address2"
                className="form-control"
              />
            </label>
            <label className="col-6 col-md-4 col-md-4 mb-3">
              City<sup>*</sup>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
              />
            </label>
            <label className="col-6 col-md-4 mb-3">
              State<sup>*</sup>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
              />
            </label>
            <label className="col-6 col-md-4 mb-3">
              Zip Code<sup>*</sup>
              <input
                type="number"
                name="zip"
                id="zip"
                className="form-control"
              />
            </label>
            <label className="col-6 col-md-4 mb-3">
              Phone Number<sup>*</sup>
              <input
                type="number"
                name="phone"
                id="phone"
                className="form-control"
              />
            </label>
            <label className="col-12 col-md-8 mb-3">
              Email<sup>*</sup>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </label>
            <div className="col-12 col-md-8">
              <h2>Additional Info</h2>
              <textarea
                className="form-control mb-5"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </form>
        <section className="border-secondary p-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Qty</th>
                <th scope="col">Product</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1x</th>
                <td>Product 1</td>
                <td>9.99$</td>
              </tr>
              <tr>
                <th scope="row">1x</th>
                <td>Product 1</td>
                <td>9.99$</td>
              </tr>
              <tr>
                <th scope="row">1x</th>
                <td>Product 1</td>
                <td>9.99$</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>30$</td>
              </tr>
            </tbody>
          </table>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
          <button className="btn btn-outline-dark">Go to payment</button>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
