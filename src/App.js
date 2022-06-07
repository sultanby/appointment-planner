import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function handleContactSubmit(name, phone, mail) {
    console.log('You clicked submit contact.');
    
    const newContact = {
      name: name,
      phone: phone,
      mail: mail,
    };

    setContacts(prev => {
      return {...prev, newContact}
    });
  }

  function handleAppointmentSubmit(title, contact, date, time) {
    console.log('You clicked submit appointment.');
    
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointments(prev => {
      return {...prev, newAppointment}
    });
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} handleContactSubmit={handleContactSubmit}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} handleAppointmentSubmit={handleAppointmentSubmit}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
