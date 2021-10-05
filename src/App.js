import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer';
import GlobalData from './Components/GlobalData';
import Navbar from './Components/Navbar';
import Contacts from './Pages/Contacts';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     <GlobalData>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/contact" component={Contacts} />
      </Switch>
       <Footer/>
      </BrowserRouter>
     </GlobalData>
      
    </div>
  );
}

export default App;
