import { useEffect, useState } from 'react';
import './App.css';
import {UserData} from './Data'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'
import PieChart from './components/PieChart';
import Axios from 'axios';
import Input from './Input';


function App() {
  const [options,setOptions]=useState({
      method: 'GET',
      url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
      params: {
        interval: '1mo',
        symbol: 'AMRN',
        range: '5y',
        region: 'US',
        includePrePost: 'false',
        useYfid: 'true',
        includeAdjustedClose: 'true',
        events: 'capitalGain,div,split'
      },
      headers: {
        'X-RapidAPI-Key': 'd2fcc324c2msh48a955bba10fa6ap1c0f2ajsne85449725ab8',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
      }
    }
  );
  const [stockData,setStockData]=useState();
  const [responseLoaded,setResponseLoaded]=useState(false);
  
  useEffect( ()=>{
      async function fetchData(){
        try {
          const response = await Axios.request(options);
          
          // console.log(response);
          setStockData({
            labels: response.data.chart.result[0].timestamp.map((item)=> {
              const Item=new Date(item*1000).toDateString();
              // console.log(Item);
              return Item;
            }),
            datasets:[{
              label: "Price",
              data: response.data.chart.result[0].indicators.quote[0].close,
            }]
          });
    
        } catch (error) {
          console.error(error);
        }
        setResponseLoaded(true);
      }
    fetchData();
    
  },[options])
  
  return (
    <div className="App">
        <Input setOptions={setOptions}/>
       {/* {responseLoaded && <BarChart chartData={stockData}/> } */}
       {responseLoaded && <LineChart chartData={stockData}/> }
       {/* {responseLoaded && <PieChart chartData={stockData}/> } */}
        {/* <LineChart chartData={stockData}/> */}
        {/* <PieChart chartData={userData}/> */}
    </div>
  );
}



export default App;
