import React,{useEffect,useState} from 'react';
import Searchbar from './components/Searchbar';
import Data from './components/Data';
import './App.css';
import axios from "axios";

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";


function App() {

  const [list, setList] = useState([]);
  const [searchname, setSearchname] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setList(response.data);
      // console.log(response.data);
    });
  }, []);
  
  const setvaltosearch = (e)=>{
    setSearchname(e);
  }

  return (
    <div className='app'>
      <Searchbar valtosearch={setvaltosearch}/>
      <table>
      <thead>
            <td className='img'></td>
            <td className='name'>Name</td>
            <td className='symbol'>Symbol</td>
            <td className='price'>Price</td>
            <td className='market_cap'>Market_cap</td>
            <td className='price_change_percentage'>Price change</td>
        </thead>
      {
        list.filter(elem => elem.name.toLowerCase().includes(searchname.toLowerCase())).map((elem)=>
         <Data 
            key={elem.id}
            symbol={elem.symbol}
            name={elem.name}
            imgsrc={elem.image}
            price={elem.current_price}
            market_cap={elem.market_cap}
            price_change_percentage={elem.price_change_percentage_24h}
         />
        )
      }

      </table>
      
    </div>
  );
}

export default App;
