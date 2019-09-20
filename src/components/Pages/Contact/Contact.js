import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {

     // State
     const [ContactInformationer, setContactInformationer] = useState([
        {title: 'Adresse:', contactData: 'Kannikegade 12', id: 1},
        {title: 'By:', contactData: '8000 Århus C', id: 2},
        {title: 'Telefon:', contactData: '26 13 26 96', id: 3},
        {title: 'Email:', contactData: 'info@runinc.dk', id: 4}
      ]);

    return (
        <div className="Contact container">
            <div className="flex-container">
            <div>
            <ContactInfo alleContactInformationerProp={ContactInformationer}/>
            </div>
            <div>
            <ContactForm/>
            </div>
            </div>
        </div>
    )
}

export default Contact;