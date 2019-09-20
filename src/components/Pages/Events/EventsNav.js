import React from 'react';
import { Link } from 'react-router-dom';
import './EventsNav.css';



const EventsNav = (props) => {
    let EventLink = props.alleEventProp.map(event => {
        return (
            <div className="event" key={event.id}>
                <li><Link to="#">{event.title}</Link></li>
                <p>Den {event.dato}</p>
            </div>
        )
    });

     return ( 
        <div className="EventsNav">
            <h2>Events</h2>
            <ul>
                {EventLink}
            </ul>
        </div>
     );
}
 
export default EventsNav;
