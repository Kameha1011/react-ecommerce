import {BsCart} from 'react-icons/bs';
import {MdSupportAgent} from 'react-icons/md';
import {FaMoneyBillWave} from 'react-icons/fa';
function ShopHelp() {
  return (
    <section className="container-fluid mt-3 overflow-hidden">
      <div className="row justify-content-center ms-5 w-100 gx-5">
        <div className="col-10 col-md-4 d-flex justify-content-between mb-3 help">
            <p><BsCart className="fs-1"/></p>
            <div className="w-75">
                <p className="fw-bold mb-1">Envío gratis y devolución</p>
                <small className="text-muted">Envío gratis a partir de $300</small>
            </div>
        </div>
        <div className="col-10 col-md-4 d-flex justify-content-between mb-3 help">
        <p><FaMoneyBillWave className="fs-1"/></p>
            <div className="w-75">
                <p className="fw-bold mb-1">Garantía de compra</p>
                <small className="text-muted">Devolución del dinero hasta 30 días de la compra</small>
            </div>
        </div>
        <div className="col-10 col-md-4 d-flex justify-content-between mb-3 help">
        <p><MdSupportAgent className="fs-1"/></p>
            <div className="w-75">
                <p className="fw-bold mb-1">55-5555-555</p>
                <small className="text-muted">Soporte 24/7</small>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHelp;
