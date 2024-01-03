import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAddressBook, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Add icons to the FontAwesome library
library.add(faCoffee, faAddressBook, faEnvelope, faCheckCircle);

export default function Suivire() {
    return (
        <>
            <div className="container p-4">
                <h4 style={{ marginTop: '50px' }}>
                    <b> Suivez-nous sur Instagram :</b> <a href="https://www.instagram.com/anas_willemsen/" target="_blank" style={{ textDecoration: 'none' ,color:'#DF5821 '}}>@Cookup </a>
                    <FontAwesomeIcon icon="check-circle" style={{color:'#21BCDF'}}/>
                </h4>
                <p><b>Partagez vos réalisations avec #MaRecette</b></p>
            </div>
        </>
    );
}
