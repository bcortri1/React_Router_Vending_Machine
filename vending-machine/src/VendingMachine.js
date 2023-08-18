import React from 'react';
import Navbar from './Navbar'
import './VendingMachine.css'

const VendingMachine = () => {
    return<div className='VendingMachine'>
        <img src='./assets/images/Vendingmachines.jpg' alt='vending machines'/>
        <p>You've come across several vending machines</p>
        <Navbar />
    </div>
}

export default VendingMachine;