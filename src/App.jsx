import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarApp } from './components/NavbarApp'
import Header from './components/Header';
import TopChoices from './components/TopChoices';
import TopSales from './components/TopSales';
import ShopHelp from './components/ShopHelp';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <NavbarApp/>
        <Header/>
        <main>
          <TopChoices/>
          <TopSales/>
          <ShopHelp/>
          <Footer />
        </main>
    </div>
  )
}

export default App
