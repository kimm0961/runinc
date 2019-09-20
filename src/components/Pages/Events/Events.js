import React, { useState } from 'react';
import './Events.css';
import EventsNav from './EventsNav';
import EventsShowcase from './EventsShowcase';

const Events = () => {

     // State
     const [events, setEvents] = useState([
        {title: 'Copenhagen Marathon', dato: '29 maj 2018', id: 1},
        {title: 'Aarhus City Run', dato: '1 juni 2018', id: 2},
        {title: 'Berlin Marathon', dato: '6 juni 2018', id: 3}
      ]);

  
    return (
        <div className="Events container">
            <div className="flex-container">
            <div className="EventShowcase">
            <EventsShowcase />
            </div>
            <div className="EventNavbar">
            <EventsNav alleEventProp={events}/>
            </div>
            </div>
        </div>
    )
}

export default Events;

