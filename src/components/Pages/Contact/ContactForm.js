import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return ( 
        <div className="ContactForm">
        <aside id="sidebar" id="box-message">
                <p>Send en besked</p>
                  <form class="message">
                      <div className="label">
                         <label>Navn:</label><br/>
                         <input type="text"/>
                         </div>
                         <div className="label">
                         <label>Email:</label><br/>
                         <input type="email"/>
                         </div>
                         <div className="label">
                         <label>Telefonnr.:</label><br/>
                         <input type="email"/>
                         </div>
                         <div className="label">
                         <label>Besked:</label><br/>
                         <textarea></textarea>
                         </div>
                     <button class="button_2" type="submit">Send besked</button>
                </form>
        </aside>
        </div>
     );
}
 
export default ContactForm;