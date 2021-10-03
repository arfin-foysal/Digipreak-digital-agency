import { BrowserRouter,Switch,Route } from 'react-router-dom';
import GlobalData from './Components/GlobalData';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     <GlobalData>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
      </Switch>
  
      </BrowserRouter>
     </GlobalData>
      
    </div>
  );
}

export default App;
