import { useState } from 'react';
import './App.css';
import {UserData} from './Data'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
function App() {
  const [userData,setUserData]=useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label: "User Gained",
      data:UserData.map((data)=>data.userGain),
    }] 
  });
  console.log(userData);
  return (
    <div className="App">
        
        <BarChart chartData={userData}/>
        <LineChart chartData={userData}/>
        <PieChart chartData={userData}/>
    </div>
  );
}

export default App;
