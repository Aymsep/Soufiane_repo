import Form from "./components/Form";
import Incident from "./components/Incident";
import SideBar from "./components/SideBar";
import './App.css'
import {useState} from 'react'

function App() {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="App">
     <SideBar/>
     <Incident/>
     <Form/>
    </div>
  );
}

export default App;
