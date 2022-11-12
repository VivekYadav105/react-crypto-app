import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,volume,pricechange,marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2473%2F2473354.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fbitcoin-logo_2473354&tbnid=FWhCv-Xs-eZK3M&vet=12ahUKEwj2uZi2iKf7AhULSRoKHfbvDAMQMygBegUIARDkAQ..i&docid=wwU5kAjSOYbKwM&w=512&h=512&q=bitcoin%20logo&ved=2ahUKEwj2uZi2iKf7AhULSRoKHfbvDAMQMygBegUIARDkAQ"||image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price.toLocaleString()}</p>
//                     <p className="coin-volume">Rs.{}</p>
                    {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                }
                <p className="coin-marketcap">
                    Mkt Cap: Rs.{marketcap.toLocaleString()}
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
