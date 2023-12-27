import img1 from './images/1.webp';
import img2 from './images/2.webp';
import img3 from './images/3.webp';

export default function Grid() {
  const imgStyle = {
    maxWidth: '100%', // Set a maximum width for the images
    maxHeight: '250px', // Set a maximum height for the images
 
  };

  return (
<<<<<<< HEAD
    <>
      <div className='container text-center' style={{backgroundColor:'#FEFEE2'}}>
        <div>
          <h3 className='h3 mb-4'><b>Moins de 🥤, plus de ♻️</b></h3>
          <p className='h5 mb-4'>Cookpal est <b>votre compagnon de tous les jours</b> pour vous rendre le quotidien <br />
            plus doux, plus savoureux, plus simple, plus vous.</p>
=======
      <>
      <div className="container-fluid rounded" style={{ backgroundColor: 'green', width: '70%', height: 'auto' }}>
      <p className="text-center text-light mt-4 p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing <br />
        elit. Excepturi perspiciatis eligendi iste veritatis similique harum aut!
      </p>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={img1} alt="" style={imgStyle} className="img-fluid" />
          <p className="text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Omnis illo voluptate deserunt rerum soluta?
          </p>
>>>>>>> bf833bc281edd4b524da38711491c37d97f2959c
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
