import React, { useEffect, useState } from 'react';
import '../index.css'

const API_KEY = '33903dccae5ac0b7de7910fc7a178078'
const BASE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}`;

function Currency({onChange}) {
    const [currencyOptions, setCurrencyOptions] = useState([]);
   
    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                let currenciesArray = Object.entries(data.rates)
                return currenciesArray
            })
            .then(currency => (currency.map(([currencyName, coefficient]) => {
                return ({
                            name: currencyName,
                            coefficient: coefficient
                        })
            }
            )))
            .then(currency => {
                setCurrencyOptions(currency);
            })
    }, []);

    
    return (
        <select id='currency' onChange={onChange} >
            {currencyOptions.map(item =>(
                <option key={item.name} selected={item.coefficient===1? 'selected' :''} value={item.coefficient} data-text={item.name}>{item.name}</option>
            ))}
        </select>
    );
}

export default Currency;
