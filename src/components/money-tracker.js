import React from 'react';
import { Button } from 'react-bootstrap';
import '../index.css'

function MoneyTracker({spending, handleDelete}) {
    function handleDeleteClick(){
        handleDelete(spending.date)
    }
    
    return(
        <>
        <tr>
            <td>{spending.date} 
                <Button 
                    variant="outline-dark" 
                    onClick={handleDeleteClick}>Clear</Button>
            </td>
            </tr> 
            {spending.info.map(s => (
                <tr>
                <td></td>
                <td>{s.thing}</td>
                <td>{s.money}</td>
                <td>{s.currencyName}</td>
                </tr>
                
            ))}
          
           
        </>
    )
}

export default MoneyTracker