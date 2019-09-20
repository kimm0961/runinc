import React from 'react';
import './EventsShowcase.css';
import eventPic from './../../../event.jpg';

const EventsShowcase = () => {
    return ( 
        <div className="EventPic responsive">
            <img src={eventPic} alt="Marathon"/>
            <div className="contact-stick">Next Event</div>
        </div>
     );
}
 
export default EventsShowcase;