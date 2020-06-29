import React, {useState} from 'react';
import './App.css';
import MoneyTrackerForm from './components/money-tracker-form'
import MoneyTrackerList from './components/money-tracker-list'
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from './components/currency'

function App() {
  const [spendings, setSpendings] = useState([])
  const [curr, setCurr] = useState(1)

  function addSpending(spending){
    setSpendings([spending, ...spendings])
  }

  function handleDelete(id){
    setSpendings(spendings.filter(spending => spending.date  !== id))  
  }

  let total = 0

  for (let i = 0; i < spendings.length; i += 1) {
    total += spendings[i].info.reduce((a, b) => +a + +b.money/b.currency, 0);  
          
  }

  function handleCurrencyTotalChange(e){
    setCurr(e.target.value)
  }

  return (
    <div className="App">
      <h1>Money tracker</h1>
      <table>
      <tbody>
      <MoneyTrackerForm 
        addSpending={addSpending} 
        spendings={spendings} 
        setSpendings={setSpendings}></MoneyTrackerForm>
      <MoneyTrackerList 
        spendings={spendings} 
        handleDelete={handleDelete}></MoneyTrackerList>
      </tbody>
      </table>
      <Currency 
          onChange={handleCurrencyTotalChange}></Currency>
      <p>{(total * curr).toFixed(2)}</p>
    </div>
  );
}

export default App;
