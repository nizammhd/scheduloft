// User.js

import React, { useContext } from 'react';

import './user.css';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './context';
import Nav from './Nav';

function User() {
  const { store } = useContext(Mycontext);
  const nav = useNavigate();

  return (
    <div>
        <Nav/>
    <div className="user-container">
      <div className='image-user'>
        <img src="https://www.thesun.co.uk/wp-content/uploads/2024/04/crop-27435668.jpg?strip=all&w=620&h=413&crop=1" alt="Profile" />
      </div>
      <div className="details">
        <h1>DAVID BECKHAM</h1>
        <p>Address: Koonamkutyy house, Chammalassery (PO), Pulamanthole, Malappuram</p>
        <h4>Card No: 1234 567 890</h4>
        <h4>Type of Card: APL (Above Poverty Line)</h4>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Family Member Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>35</td>
              <td>Engineer</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Emily</td>
              <td>28</td>
              <td>Doctor</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Michael</td>
              <td>42</td>
              <td>Lawyer</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sarah</td>
              <td>38</td>
              <td>Teacher</td>
            </tr>
            <tr>
              <td>5</td>
              <td>David</td>
              <td>45</td>
              <td>Artist</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => nav('/stock')}>Available Stock</button>
      </div>
    </div>
    </div>
  );
}

export default User;
