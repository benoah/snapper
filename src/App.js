import React, { useState, useEffect } from 'react';
import CardHolder from "./components/Card.js"


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        './persons.json',
      );
       const json = await res.json();
       setData(json.persons);
    };
    fetchData();
  }, [setData]);



 return (
  <>
   <h1>ansatt</h1>
   <CardHolder/>




    <h1>deler  det visuelle</h1>








   {data.map(({person}) => (
    <div classname="card w-100">
    <div classname="card-body">
      <h5 clasnames="card-title">{person.fullname}</h5>
      <small class="text-muted">  <small class="text-muted">daniel@snapper.com</small></small>
      <p classname="card-text">With supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>


   ))}
   </>
  );
}

export default App;