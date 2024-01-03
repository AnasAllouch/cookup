import b1 from './images/b1.webp'
import b2 from './images/b2.webp'
import b3 from './images/b3.webp'

export default function Blog(){
    return( <>
        <div style={{width:'100%',backgroundColor:'#FF5733',height:'100%',padding:'30px'}}>
            <h2 className="text-light p-5" style={{marginLeft:'225px'}}>Le Blog : Nos idées dans votre cuisine</h2>
            <div className="container">
                <div className="row">
                    <div className="col-4 bg-light rounded" style={{width:'430px',height:'430px',marginLeft:'10px',marginBottom:'30px'}}>
                        <img src={b1} style={{height:'70%',width:'100%',margin:'0px',padding:'0px'}}/>
                        <h5 style={{marginTop:'12px'}}>Votre planification recettes du mois de janvier</h5>
                        <p>Chaque mois, retrouvez maintenant votre planification de recettes mensuelle !</p>
                    </div>
                    <div className="col-4 bg-light rounded" style={{width:'430px',height:'430px',marginLeft:'10px',marginBottom:'30px'}}>
                    <img src={b2} style={{height:'70%',width:'100%',margin:'0px',padding:'0px'}}/>
                    <h5 style={{marginTop:'12px'}}>Toutes les nouveautés du mois de décembre 2023</h5>
                        <p>Découvrez nos nouvelles recettes sorties tout au long du mois de décembre.</p>
                    </div>
                    <div className="col-4 bg-light rounded" style={{width:'430px',height:'430px',marginLeft:'10px',marginBottom:'30px'}}>
                    <img src={b3} style={{height:'70%',width:'100%',margin:'0px',padding:'0px'}}/>
                    <h5 style={{marginTop:'12px'}}>Planification recettes de la semaine : 25-31 décembre</h5>
                        <p>Découvrons ensemble le menu de la semaine du 25 décembre !</p>
                    </div>
                </div>
            </div>
            <h2 style={{color:'white',marginLeft:'265px'}}>Pour ne rien manquer des nouveautés</h2>

            <input type="text" style={{height:'50px',width:'330px',borderRadius:'20px',border:'none',padding:'20px',marginLeft:'265px'}} placeholder='Votre adrese e-mail' />
            <input type="submit"  style={{width:'130px',height:'50px',border:'none',background:'#075526',color:'white',marginLeft:'10px',borderRadius:'20px', value:"Je m abonne,marginLeft:'265px'"}}/>
        </div>
        </>)
   
}