import React, { useState, useEffect } from 'react';

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
  
  );
}

export default App;






{products.map(function (product) {
  let { id, image_url, title, description, price, updated_at } = product;
  return (w
    <ProductItem
      key={id}
      updated_at={updated_at}
      id={id}
      image_url={image_url}
      title={title}
      description={description}
      price={price}
    />
  );
})}
