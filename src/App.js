import {useState} from "react";
import Navbar from "./Components/navbar";
import Contacts from "./Components/contact/Contacts";
import './App.css';

const App = () => {
    const [getContacts,setContacts] = useState([])
  return (
    <div className="App">
        <Navbar/>
        <Contacts contacts={getContacts}/>
    </div>
  );
}

export default App;
