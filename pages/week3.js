import { useState } from 'react';
import Form from 'next/form'

const Counter = () => {
  const [type, setType] = useState("Suragch"); 

  return (
    <div className="flex p-96 items-center">
      <h1 className="mr-12">Name: </h1> 
      <Form action="/search">
        <input 
          name="query" 
          value={type} 
          onChange={(event) => setType(event.target.value)}
          className="mr-2"
        />
        <p className="ml-5">{type}</p> 
     </Form>
    </div>
  );
};

export default Counter;
