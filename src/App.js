
import './App.css';
import Accueil from './navbar/Acceuil';
import Footer from './navbar/footer';
import Topnavbar from './navbar/navbar';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Aide from './Aide/aide';




 


function App() {
  
  return (
    <Router>
         <div style={{backgroundColor:'#FEFEE2'}}>
         <Topnavbar/>
         <Routes>
         <Route path='/' element={<Accueil/>}/>
         <Route path='/aide' element={<Aide/>}/>

         </Routes>
        <Footer/>
       </div>
    </Router>
  

  );
}

export default App;
