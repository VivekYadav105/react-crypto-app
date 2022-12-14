import { useEffect, useState,useRef } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';


function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  const searchRef = useRef(null) 
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
       setCoins(res.data)
       console.log(res.data)
    }).catch(error=>console.log(error))
  },[search])

  const handleSubmit = e =>{
    e.preventDefault(); 
    setSearch(searchRef.current.value);
  }
  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search your desired coin</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" className="coin-input" placeholder="Find the bug and solve it"/>
        </form>

      </div>
      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image.id} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
//           volume={coin.total_volume}
          />
        );
      })}


    </div>
  );
}

export default App;
