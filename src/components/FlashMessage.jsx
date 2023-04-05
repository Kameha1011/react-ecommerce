import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
//TODO: cambiar boton close me y'all por icono de x
export function FlashMessage({show, turn, productTitle, qty}) {
  return (
    <>
      <Alert show={show} variant="success" className='d-flex justify-content-between align-items-baseline'>
        <p>{qty} {productTitle} were added to your cart!</p>
          <Button onClick={() => turn(false)} variant="outline-success">
            Close me y'all!
          </Button>
      </Alert>

    </>
  );
}