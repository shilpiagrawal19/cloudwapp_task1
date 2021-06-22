import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './Event.css'
import EventList from './EventList';

function Event() {
    return (
        <div className="Event">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <h4 className="left padding-left">Upcoming Events </h4>
                    <div className="right">
                    <div className="inline">
                    <DropdownButton id="dropdown-button" title="Weekdays">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="dropdown-button" title="Event Type">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="dropdown-button" title="Any Category">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    </DropdownButton>
                    </div>
                    </div>
                </div>
                </div>
           
                <div className="row">
                <EventList/>
                
                </div>
                </div>
        </div>
    )
}

export default Event
