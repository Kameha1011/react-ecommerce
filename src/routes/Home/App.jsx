import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarApp } from '../../components/NavbarApp'
import Carousel from '../../components/Carousel';
import TopChoices from '../../components/TopChoices';
import TopSales from '../../components/TopSales';
import ShopHelp from '../../components/ShopHelp';
import Footer from '../../components/Footer';

function App() {

  return (
    <>
        <NavbarApp/>
        <Carousel/>
        <main>
          <TopChoices/>
          <TopSales/>
          <ShopHelp/>
          <Footer />
        </main>
    </>
  )
}

export default App
