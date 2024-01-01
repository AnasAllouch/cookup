
import './App.css';
import Grid from './navbar/grid';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import How from './navbar/how';
import Topnavbar from './navbar/Topnavbar';
import ImageSlider from './navbar/slider';
// import PasserCuisine from './passerCuisine';
import Cuisine from './Cuisine';
import Home from './Home';
function App() {
  return (
    <Router>
    <div style={{backgroundColor:'#FEFEE2'}}>
     {/* <Topnavbar/>
     <ImageSlider/>
     <How/>
     <Grid/>
     <Blog/> */}
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path="/cuisine" element={<Cuisine />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
