import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="py-5 container-fluid">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Sections</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to={'/'} className="nav-link p-0">Home</Link></li>
            <li className="nav-item mb-2"><Link to={'/shop/allProducts'} className="nav-link p-0">Shop</Link></li>
            <li className="nav-item mb-2"><Link to={'/contact'} className="nav-link p-0">Contact</Link></li>
          </ul>
        </div>  
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
              <button className="btn" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2023 Shiro Company All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a href="https://twitter.com/company_shiro" target='_blank'><BsTwitter/></a></li>
          <li className="ms-3"><a href="https://www.instagram.com/shirocompany2001/" target='_blank'><BsInstagram/></a></li>
          <li className="ms-3"><a href="https://www.facebook.com/shirocompany2001" target='_blank'><BsFacebook/></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer