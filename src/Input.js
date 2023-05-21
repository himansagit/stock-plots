import React, { useState } from 'react'

export default function ({setOptions}) {
    const [symbol,setSymbol]=useState('AMRN');
    const [range,setRange]=useState('5y');
    const [interval,setInterval]=useState('1mo');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setOptions(options=> {
            return {...options,params:{...options.params,symbol,range,interval}};
        });
    }
  return (
    <div className='Inputs'>
            <form onSubmit={handleSubmit}>
                <label>Symbol</label>
                <input type='text' required value={symbol} onChange={(e)=> setSymbol(e.target.value)}/>
                <label>Inverval</label>
                <select required value={interval} onChange={(e)=> setInterval(e.target.value)}>
                    <option value='1m'>1 Minute</option>
                    <option value='2m'>2 Minute</option>
                    <option value='5m'>5 Minute</option>
                    <option value='15m'>15 Minute</option>
                    <option value='30m'>30 Minute</option>
                    <option value='60m'>60 Minute</option>
                    <option value='1d'>1 Day</option>
                    <option value='1wk'>1 Week</option>
                    <option value='1mo'>1 Month</option>
                </select>

                <label>Range</label>
                <select required value={range} onChange={(e)=> setRange(e.target.value)}>
                    <option value='1d'>1 Day</option>
                    <option value='5d'>5 Day</option>
                    <option value='1mo'>1 Month</option>
                    <option value='3mo'>3 Month</option>
                    <option value='6mo'>6 Month</option>
                    <option value='1y'>1 Year</option>
                    <option value='2y'>2 Year</option>
                    <option value='5y'>5 Year</option>
                    <option value='10y'>10 Year</option>
                </select>
                    <button>Plot</button>
            </form>
            {/* <h1>{symbol}</h1> */}
            {/* <h1>{interval}</h1> */}
            {/* <h1>{range}</h1> */}
    </div>
  )
}
