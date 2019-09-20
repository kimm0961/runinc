import React from 'react';
import map from './../../../map.JPG';
import './ContactInfo.css';


const ContactInfo = (props) => {
    let contactInfoListe = props.alleContactInformationerProp.map(ContactInformation => {
        return (
            <div className="contactInfoListe" key={ContactInformation.id}>
            <p>{ContactInformation.title} {ContactInformation.contactData}</p>
            </div>
      )
    });

    return ( 

        <div className="ContactInfo">
            <div className="Map responsive">
            <img src={map} alt="map"/>
            <div className="contact-stick">Contact</div>
            </div>
            <div className="contact-info">
            <h3>runinc</h3>
            {contactInfoListe}
            </div>
        </div>


     );
}
 
export default ContactInfo;