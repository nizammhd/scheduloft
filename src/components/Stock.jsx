import React, { useContext, useState } from 'react';
import "./stock.css";
import { Mycontext } from './context';
import Nav from './Nav';

function Stock() {
    const { prod, setProd } = useContext(Mycontext);
    let no="NO"

    // Function to toggle availability
    const toggleAvailability = (id) => {
        const updatedProducts = prod.map((product) => {
            if (product.id === id) {
                return { ...product, Availability: !product.Availability };
            }
            return product;
        });
        setProd(updatedProducts);
    };

    return (
        <div>
            <Nav />
            <div className='outer-stock'>
                <h2>Item Availability</h2>
                <table className='table-stock'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item</th>
                            <th>Kilo</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.item}</td>
                                <td>{data.quantity}</td>
                                <td>
                                    <button >
                                    {data.Availability ? "Available" : "Not Available"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Note: If the product you want is not available, please check the link below and find another shop.</h3>
                <a href='https://www.google.com/maps/search/near+ration+shop/@10.9317935,76.1621891,14z?entry=ttu'><button>click here</button></a>
                

            </div>

        </div>
    );
}

export default Stock;
