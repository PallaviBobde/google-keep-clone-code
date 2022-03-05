import React from 'react';

const Data = ({symbol,name,imgsrc,price,market_cap,price_change_percentage}) =>{
    return (
        <tr className='dataelem'>
            <td className='img'>
               <img src={imgsrc}/>
            </td>
            <td className='name'>{name}</td>
            <td className='symbol'>{symbol}</td>
            <td className='price'>{price.toLocaleString("en-IN",{style:"currency", currency:"INR"})}</td>
            <td className='market_cap'>{market_cap.toLocaleString()}</td>
            <td className='price_change_percentage'>
                {price_change_percentage > 0 ? <span className='green'>{price_change_percentage.toFixed(2)} %</span> : <span className='red'>{price_change_percentage.toFixed(2)} %</span>}
            </td>
        </tr>
    );
}

export default Data;