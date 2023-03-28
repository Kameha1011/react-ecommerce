import slide1 from '../assets/carousel/slide1.jpg';
import slide2 from '../assets/carousel/slide2.jpg';
import slide3 from '../assets/carousel/slide3.jpg';
import Carousel from "react-bootstrap/Carousel";

function Header() {
  return (
    <header>
      <Carousel
        variant="dark"
        indicators={false}
        interval={null}
        className="w-100 h-100"
      >
        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100 object-fit-contain"
            src={slide1}
            alt='slide1'
          />
          <Carousel.Caption className="text-dark text-end me-2">
            <h1 className=" mb-3 display-1 fw-bold text-warning">Gold Chains</h1>
            <p className="lead">Available now</p>
            <a href="#" className="btn btn-outline-dark">
              Ver productos
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100 object-fit-contain"
            src={slide2}
            alt='slide2'
          />
          <Carousel.Caption className="text-warning text-end me-2">
            <h1 className=" mb-3 display-1 fw-bold text-warning">Gold Chains</h1>
            <p className="lead">Available now</p>
            <a href="#" className="btn btn-outline-light">
              Ver productos
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="h-100">
          <img
            className="d-block w-100 h-100 object-fit-contain"
            src={slide3}
            alt='slide3'
          />
          <Carousel.Caption className="text-dark text-end me-2">
            <h1 className=" mb-3 display-1 fw-bold text-warning">Gold Chains</h1>
            <p className="lead">Available now</p>
            <a href="#" className="btn btn-outline-dark">
              Ver productos
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;
