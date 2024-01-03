import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './aide.css';

export default function Aide() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ve3i7vo', 'template_vp44vql', formRef.current, '28664srB-uwJYERNu')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='Bloc text-center'>
            <h1>Besoin d'aide ? </h1>
            <p>Afin de retrouver les recettes que vous avez commandées, vous pouvez vous rendre dans la section "Passer en cuisine", le 2e onglet. Vous y trouverez l'intégralité des recettes choisies lors de vos précédentes commandes et pour chacune le déroulé pas à pas et des vidéos explicatives ! Dans cette partie, vous y retrouverez également vos favoris et les articles du blog Jow ! <br />
            A : veillez à valider votre commande directement sur l'application Jow pour retrouver l'intégralité de vos recettes et non sur l'application de votre marchand.</p>
            <h3>Vous n'avez pas trouvé réponse à vos questions ?</h3>

            <form ref={formRef} onSubmit={sendEmail} className='form mx-auto' style={{ maxWidth: '300px' }}>
                <div className="form-group">
                    <label htmlFor="user_name">Nom</label>
                    <input type="text" className="form-control" id="user_name" name="user_name" placeholder='entre le nom' />
                </div>
                <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input type="email" className="form-control" id="user_email" name="user_email" placeholder='entre e-mail' />
                </div>
                <div className="form-group" style={{ marginBottom: '15px'  }}> {/* Added marginBottom */}
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" style={{ marginBottom: '8px' }} placeholder='Message'/>
                </div>
                <button type="submit" className=" btn-block" style={{ width: '100%', border: 'none', backgroundColor: '#FF5733', color: 'white', borderRadius: '5px', height: '30px',margin: 'auto',display:'block',marginBottom:'20px'}}>Envoyer</button>
            </form>
        </div>
    );
}
