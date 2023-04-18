import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {AiOutlineCloseCircle} from 'react-icons/ai'
//TODO: cambiar boton close me y'all por icono de x
export function FlashMessage({show, turn, productTitle, qty}) {
  return (
    <>
      <Alert show={show} variant="success" className='d-flex justify-content-between align-items-baseline col-12'>
        <p>{qty} {productTitle} were added to your cart!</p>
          <button className='btn' onClick={() => turn(false)}>
            <AiOutlineCloseCircle/>
          </button>
      </Alert>

    </>
  );
}