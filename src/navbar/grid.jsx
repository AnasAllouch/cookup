import img1 from './images/1.webp';
import img2 from './images/2.webp';
import img3 from './images/3.webp';

export default function Grid() {
  const imgStyle = {
    maxWidth: '100%', // Set a maximum width for the images
    maxHeight: '250px', // Set a maximum height for the images
    // ggtyyugev
 
  };

  return (
    <>
      <div className='container text-center' style={{backgroundColor:'#FEFEE2'}}>
        <div>
          <h3 className='h3 mb-5 mt-5'><b>Moins de 🥤, plus de ♻️</b></h3>
          <p className='h5 mb-4'>Cookpal est <b>votre compagnon de tous les jours</b> pour vous rendre le quotidien <br />
            plus doux, plus savoureux, plus simple, plus vous.</p>
        </div>

        <div className='row mt-5'>
          <div className='col-md-4 col-sm-6'>
            <img src={img1} className='img-fluid mb-4' style={imgStyle} alt='Description 1' />
            <p className='h5'>Des inspirations recettes <br /> pensées pour vous</p>
          </div>
          <div className='col-md-4 col-sm-6'>
            <img src={img3} className='img-fluid mb-4' style={imgStyle} alt='Description 2' />
            <p className='h5'>Un panier de courses <br /> optimisé en 1 clic</p>
          </div>
          <div className='col-md-4 col-sm-6'>
            <img src={img2} className='img-fluid mb-4' style={imgStyle} alt='Description 3' />
            <p className='h5'>Quoi de plus gratifiant que <br /> de dire "c'est moi qui l'ai <br /> fait" ?</p>
          </div>
          <div className='col-12 mt-5'>
            <h5>Mieux manger, mieux consommer, sans surplus et surtout au meilleur prix. <br /> Magique ? Non, juste Jow</h5>
          </div>
        </div>
      </div>
    </>
  );
}
