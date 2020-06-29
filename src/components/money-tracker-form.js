import React, {useState} from 'react';
import Currency from './currency'
import { Button } from 'react-bootstrap';

function MoneyTrackerForm({addSpending, spendings, setSpendings}) {
    const [spending, setSpending] = useState({
        date: '',
        info: []
    })

    const [information, setInformation] = useState({
        money: '',
        thing: '',
        currencyName: '',
        currency: ''
    })


    function handleCurrencyChange(e){
        setInformation({...information, currencyName: document.getElementById('currency').querySelector('option:checked').getAttribute('data-text'), currency: e.target.value })        
    }

    function handleInputChange(e){
        setInformation({...information, thing: e.target.value})
    }

    function handleDateChange(e){
        setSpending({...spending, date: e.target.value})
    }

    function handleMoneyChange(e){
        setInformation({...information, money: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault() 
        
        if((spendings.some(i => i.date === spending.date)) === false){
            spending.info.push(information)
            addSpending({...spending})
        }

        for(let key of spendings){
            if(key.date === spending.date){
                setSpending({...key, info: key.info.push(information)})
                setSpendings([...spendings])
            } 
        }  

        setSpending({...spending, info:[]})
        setInformation({...information, money: '', thing: ''}) 
    }

    let enabled = 
        spending.date.length > 0 && 
        information.money.length > 0 && 
        information.thing.length > 0 && 
        information.currencyName.length > 0 

    function handleList(e){
        e.preventDefault();
        setSpendings([...spendings].sort(function compare(a, b){
            let dateA = new Date(a.date)
            let dateB = new Date(b.date)
            return dateB - dateA
        }))
    }

    return(
        <>
        <tr>
        <td>
        <input 
                type="date" 
                id="date"
                value={spending.date}
                onChange={handleDateChange}>
            </input>
        </td>
          <td>
          <input 
                name='thing'
                type='text'
                value={information.thing}
                onChange={handleInputChange}>
            </input>
          </td>  
          <td>
          <input 
                type="number" 
                id="money"
                value={information.money}
                onChange={handleMoneyChange}>
            </input>
          </td> 
          <td>
          <Currency 
                onChange={handleCurrencyChange}></Currency>
          </td> 
            <td>
            <Button 
                variant="outline-dark"
                onClick={handleSubmit} 
                disabled={!enabled}>Add</Button> 
            </td>
            <td>
            <Button 
                variant="outline-dark"
                onClick={handleList}>List</Button>
            </td>
        </tr>
        </>
        
    )
}

export default MoneyTrackerForm;


