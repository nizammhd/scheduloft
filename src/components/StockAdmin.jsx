import React, { useContext } from 'react';
import "./stock.css";
import { Mycontext } from './context';

function StockAdmin() {
    const { prod, setProd } = useContext(Mycontext);

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

    // Function to increase quantity by 10
    const increaseQuantity = (id) => {
        const updatedProducts = prod.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 10 };
            }
            return product;
        });
        setProd(updatedProducts);
    };

    return (
        <div>
            <div className='outer-stock'>
                <h2>Item Availability</h2>
                <table className='table-stock'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item</th>
                            <th>Kilo</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prod.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.item}</td>
                                <td>{data.quantity*10}</td>
                                <td>
                                    <button onClick={() => toggleAvailability(data.id)}>
                                        {data.Availability ? "Available" : "Not Available"}
                                    </button>
                                </td>
                                <td>
                                    <button className='' onClick={() => increaseQuantity(data.id)}>Increase Qty by 10</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StockAdmin;
