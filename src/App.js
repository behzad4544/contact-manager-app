import {useState} from "react";
import Navbar from "./Components/navbar";
import Contacts from "./Components/contact/Contacts";
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
