import React from 'react'
const Layout = ({ contacts }) => {
    console.log('contacts-----', contacts);
    return (
    <div>
        <center><h1>Contact List</h1></center>
        {contacts.map((contact) => 
            (<ul> 
                <li key={contact.id}>
                    {contact.name}
                    {contact.email}
                </li>
            </ul>
           
            
            ))}
    </div>
    )
};



export default Layout