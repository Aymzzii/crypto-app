import { RotatingLines } from 'react-loader-spinner';
import React from 'react';
import TableRow from "./TableRow";

import styles from "./TableCoin.module.css";


function TableCoin({coins, isLoading, currency, setChart}) {

    // console.log(coins)
    return (
        <div className={styles.container}>
            {isLoading 
            ? 
            <RotatingLines strokeColor='#3874ff' strokeWidth='2'/> 
            :
            <div>
            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => <TableRow 
                coin={coin} 
                key={coin.id} 
                currency={currency} 
                setChart={setChart}/>)}
            </tbody>
            </table>
            </div>
            }
        </div>
    )
}

export default TableCoin;


