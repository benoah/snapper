import React, { useState, useEffect } from "react";
import CardHolder from "./cardholder/CardHolderList";
import Navbar from "./navbar/Navbar.js";
import ProgressDonut from "./progressbar/ProgressDonut"

import './App.css';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./persons.json");
      const json = await res.json();
      setData(json.persons);
    };
    fetchData();
  }, [setData]);

  return (
    <>
<ProgressDonut/>


<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>
    <Navbar />
   


     <h1 className="container">Ansatte</h1>
     {data.map(({ person, pid }) => (
      <CardHolder
      key ={pid}
      name={person.fullname} 
      lastname={person.lastname}
      mobile={person.mobile}
      birthdate = {person.birthdate}
      image ={person.image}
      lastcall={person.lastcall}
      kritiskeoppgaver={person.kritiskeoppgaver}
      />  
     ))}
     </>
  );
}

export default App;



