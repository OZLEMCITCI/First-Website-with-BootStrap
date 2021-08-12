
import './App.css';
<<<<<<< HEAD
import MyNavbar from './components/myNavbar';
import Home from './components/Home';
import Kurslar from './components/Kurslar';
import Kisiler from './components/Kisiler';


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
=======
import UseEffectFetch from './UseEffectFetch';
>>>>>>> 634f33e46562b424360869a77a04864fc26aa9f9


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <MyNavbar />
        
        <Switch>
        <Route exact path="/">
       <Home /> 
      </Route>
       <Route path="/kurslar">
      <Kurslar/>
          </Route>
          <Route exact path="/iletisim">
       <Iletisim/> 
          </Route>
          <Route exact path="/kisiler">
       <Kisiler/> 
      </Route>
        </Switch>
        <Footer/>
      
        
      </Router>
     
      
=======
     <UseEffectFetch/>
>>>>>>> 634f33e46562b424360869a77a04864fc26aa9f9
    </div>
  );
}

export default App;
