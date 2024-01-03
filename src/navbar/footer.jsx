import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#075526'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span  style={{ color: 'white' }}>Get connected with us on social networks:</span>
        </div>

        <div style={{color:'white'}}>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faGoogle} />
  </a>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href='/' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'  style={{ color: 'white' }}>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Cookpal
              </h6>
              <p  style={{ color: 'white' }}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' style={{ color: 'white' }}>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4' style={{ color: 'white' }}>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' style={{ color: 'white' }}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Rabat Hay Nahda 4
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                anasallouch77@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +212641316318
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +212622556620
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:'white'  }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://www.instagram.com/anas_willemsen/' target='_blank'>
             Allouch.Dev
        </a>
      </div>
    </MDBFooter>
  );
}