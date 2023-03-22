import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComp}  from '../../components/NavbarComp'
import Carousel from '../../components/Carousel';
import TopChoices from '../../components/TopChoices';
import TopSales from '../../components/TopSales';
import ShopHelp from '../../components/ShopHelp';
import Footer from '../../components/Footer';

function App() {

  return (
    <>
        <NavbarComp/>
        <Carousel/>
        <main>
          <TopChoices/>
          <TopSales/>
          <ShopHelp/>
        </main>
        <Footer />
    </>
  )
}

export default App
