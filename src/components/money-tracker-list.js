import React from 'react';
import MoneyTracker from './money-tracker'

function MoneyTrackerList({spendings, handleDelete}) {
    return(
        <>
            {spendings.map(spending => (
                <MoneyTracker 
                    spending={spending} 
                    handleDelete={handleDelete}></MoneyTracker>
            ))}
        </>
    )
}

export default MoneyTrackerList