import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";


export const SideCart = ({show, handleClose}) => {

  const { cart, deleteProductFromCart } = useContext(CartContext);

  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"} className='bg-dark text-light'>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Your Cart</Offcanvas.Title>
      {cart.length > 0 && <Link to='/checkout' className="btn btn-outline-light">Go to checkout</Link>}
    </Offcanvas.Header>
    <Offcanvas.Body>
      {!cart.length && <h2>There are no products on your cart...</h2>}
      {cart.map((cartItem, index) => (
        <div key={index} className={`${(index % 2 == 0) && 'bg-secondary'} p-2 mb-2` }>
          <p>
            {cartItem.product.title} (x{cartItem.qty})
          </p>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteProductFromCart(cartItem.product.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </Offcanvas.Body>
  </Offcanvas>
  )
}
