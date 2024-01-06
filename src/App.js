
import './App.css';
import Accueil from './navbar/Acceuil';
import Footer from './navbar/footer';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Aide from './Aide/aide';
import Topnavbar from './navbar/Topnavbar';
import Etudiant from './etudiant';

function App() {
  
  return (
    <Router>
         <div style={{backgroundColor:'#FEFEE2'}}>
         <Topnavbar/>
         <Routes>
         <Route path='/' element={<Accueil/>}/>
         <Route path='/aide' element={<Aide/>}/>
         <Route path='/crud' element={<Etudiant/>}/>
        

         </Routes>
        <Footer/>
       </div>
    </Router>
  

  );
}

export default App;
