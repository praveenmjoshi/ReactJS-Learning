import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {get} from '../services/HttpService';

function Shop() {

  const [items , setItems] = useState([]);

  const fetchItems = () =>{
    const url = 'https://fortnite-api.theapinetwork.com/upcoming/get';

    get(url).then(response =>{
      const data = response.data;
      setItems(data.data);
      console.log(items)
    }, error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    fetchItems();
  }, []);
  
  return (
    <div>
      <h2>Shop Page</h2>
      {
        items.map((item)=>(
          <h4 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>
             {item.item.name} 
          </Link>
          </h4>
        ))
      }
    </div>
  );
}

export default Shop;
