import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const List = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    // console.log(beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
//   console.log(searchTerm)

  return (
    <div className="bottle-list">
        <div>
            <input style={{
               backgroundColor: 'black',
               height: 30,
               width: '600px',
               marginBottom: 20,
               marginTop: 10,
               color: 'white',
               borderRadius: 5,  
            }}
                type="text"
                placeholder="Search bottles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />  
        </div>
      {filteredBeers.map((beer) => (
        <div key={beer.id}>
            <Card beer={beer} />
        </div>
       
       ))}
       {filteredBeers.length === 0  && <h2>No such results found</h2>}
    </div>
  );
};

export default List;
