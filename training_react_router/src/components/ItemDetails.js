import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {get} from '../services/HttpService';

function ItemDetails({match}) {
  let itemId = ''
  const [item , setItems] = useState({
      item:{
        images:{}
      }
  });
  useEffect(()=>{

    console.log('match',match)
    itemId = match.params.id;
    fetchItems();
    
  }, []);

  const fetchItems = () =>{
    const url = `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`;
    get(url).then(response => {
        console.log(response);
        setItems(response.data.data);
    }, error =>{
        console.log(error);
    });
  }



  
  return (
    <div>
      <h2>Item Detail Page</h2>
      {
        <div>
            <h4>{item.itemId}</h4>
            <img src={item.item.images.background}/>
        </div>
      }
    </div>
  );
}

export default ItemDetails;
