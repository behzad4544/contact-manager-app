import {useState} from "react";


import {AddContact, Contact, Contacts, EditContact, SearchContact, ViewContact, Navbar, Spinner} from './Components'

import './App.css';

const App = () => {
    const [getContacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <div className="App">
            <Navbar/>
            <Contacts contacts={getContacts} loading={loading}/>
        </div>
    );
}

export default App;
