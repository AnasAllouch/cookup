
import './App.css';
import Grid from './navbar/grid';
import How from './navbar/how';
import Topnavbar from './navbar/Topnavbar';
import ImageSlider from './navbar/slider';


function Home() {
  return (

    <div>
     <Topnavbar/>
     <ImageSlider/>
     <How/>
     <Grid/>
    </div>

  );
}

export default Home;
