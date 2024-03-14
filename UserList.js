import React, { useState, useEffect} from "react";
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const[ listOfUsers, setListOfUsers]= useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .than(response => { 
            setListOfUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetch data:',error);

        });

    },[]);

    return (
        <div className="user-list">
            <h1>UserList</h1>
            <ul>
                {listOfUsers.map(user=>(
                    <li kay={user.id}>
                      <h2>{user.name}</h2>
                      <p>Username:{user.username}</p>
                      <p>Email:{user.email}</p>
                      <p>Address:{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                      <p>phone: {user.phone}</p>
                      <p>Website: {user.website}</p>
                      <p>Company: {user.company.name}</p>

                    </li>
               ))}

                
            </ul>
        </div>
    );
    
};

export default UserList;
