import React from 'react';
import chrtUp from "../../assets/chart-up.svg";
import chrtDown from "../../assets/chart-down.svg";

import { marketChart } from '../../services/cryptoapi';

import styles from "./TableRow.module.css";

function TableRow({coin, currency, setChart,}) {

    const {
        id,
        name, 
        image, 
        symbol, 
        total_volume, 
        current_price, 
        price_change_percentage_24h: price_change
        } = coin; 

    const showHandler = async() => {
        try {
            const res = await fetch(marketChart(id));
            const json = await res.json()
            setChart({...json, coin: coin});
        } catch (error) {
            setChart(null)
        }
    }                   
    
    return (
        <tr className={styles.main}>
            <td>
                <div className={styles.symbol} onClick={showHandler}>
                    <img src={image} alt=''/>
                    <span>{symbol.toLowerCase()}</span>
                </div>
            </td>
            <td>{name}</td>
            <td>{currency === "usd" && "$"}{current_price.toLocaleString()}</td>
            <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
            <td>${total_volume.toLocaleString()}</td>
            <td><img src={price_change > 0 ? chrtUp : chrtDown} alt={name}/></td>
        </tr>
        )
        }


export default TableRow;
